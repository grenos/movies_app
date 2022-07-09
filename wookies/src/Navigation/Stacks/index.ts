export * from './MoviesStack';
export * from './SearchMovieStack';

import { RootStackParamListMovies } from './MoviesStack';
import { RootStackParamListSearch } from './SearchMovieStack';

type ScreenRootParams = RootStackParamListMovies & RootStackParamListSearch;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends ScreenRootParams {}
    }
}
