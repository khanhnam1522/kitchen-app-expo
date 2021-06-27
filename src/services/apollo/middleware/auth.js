import { getItem } from 'secureStore';
import { setContext } from 'apollo-link-context';

const authMiddleware = setContext(async () => {
	const accessToken = await getItem('accessToken');
	const res = {
		headers: {
			authorization: `bearer ${accessToken || null}`,
		},
	};
	return res;
});

export default authMiddleware;
