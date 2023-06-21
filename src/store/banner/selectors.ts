import { NameSpace } from '../../consts';
import { Banner } from '../../types/banner';
import { State } from '../../types/state';

export const getBanner = (state: State): Banner | null => state[NameSpace.Banner].banner;
