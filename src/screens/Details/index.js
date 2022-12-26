import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import {
    Container,
    BannerMovie,
    HeaderBanner,
    ButtonIcon,
    TitleMovie,
    Description,
    ButtonTrailer,
    ButtonTrailerText,
    Banner,
    RateContainer,
    RateText,
} from './styles';

import api, { api_key } from '../../services/api';
import { Alert, Linking, ActivityIndicator } from 'react-native';
import { theme } from '../../styles/theme';

export function Details() {
    const navigation = useNavigation();
    const route = useRoute();

    const [movie, setMovie] = useState({});
    const [urlTrailer, setUrlTrailer] = useState('');
    const [isFavorite, setIsFavorite] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isActive = true;

        async function getMovie() {
            const [response, trailerLink] = await Promise.all([
                api.get(`/movie/${route.params?.id}`, {
                    params: {
                        api_key: api_key,
                        language: 'pt-BR',
                    }
                }),
                api.get(`https://api.themoviedb.org/3/movie/${route.params?.id}/videos`, {
                    params: {
                        api_key: api_key,
                        language: 'pt-BR',
                    }
                })
            ])

            if (isActive) {
                setMovie(response.data)
                if (trailerLink.data.results.length > 0) {
                    setUrlTrailer(trailerLink.data.results[0].key);
                } else {
                    setUrlTrailer('');
                }

                setLoading(false);
            }
        }

        getMovie();

        return () => {
            isActive = false;
        }
    }, [])

    function handleViewTrailer() {
        if (urlTrailer === '') {
            Alert.alert('MovFlix', 'Esse título não possui um vídeo trailer');
            return;
        }
        Linking.openURL(`https://www.youtube.com/watch?v=${urlTrailer}`)
    }

    if (loading) {
        return (
            <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color={theme.colors.Purple} size={'large'} />
            </Container>
        )
    }

    return (
        <Container>
            <BannerMovie>
                <Banner
                    source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }}
                    resizeMode={'cover'}
                />
                <HeaderBanner>
                    <ButtonIcon onPress={() => navigation.goBack()}>
                        <Feather name='arrow-left' size={32} color={theme.colors.Foreground} />
                    </ButtonIcon>

                    <ButtonIcon onPress={() => setIsFavorite(!isFavorite)}>
                        <FontAwesome name={isFavorite ? 'heart' : 'heart-o'} size={32} color={isFavorite ? theme.colors.Red : theme.colors.Foreground} />
                    </ButtonIcon>
                </HeaderBanner>
            </BannerMovie>

            <TitleMovie>{movie.title}</TitleMovie>

            <RateContainer>
                <RateText>{parseFloat(movie.vote_average).toFixed(1)}</RateText>
                <FontAwesome name='star' size={18} color={theme.colors.Foreground} />
            </RateContainer>

            <Description>{movie.overview ? movie.overview : "Sem Descrição"}</Description>

            <ButtonTrailer onPress={handleViewTrailer}>
                <ButtonTrailerText>Assitir ao Trailer</ButtonTrailerText>
            </ButtonTrailer>

        </Container>
    );
}