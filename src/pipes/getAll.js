import logger from '../logger';
import {Pipeline} from '../db';
import {asyncRequest} from '../util';

const handler = async (req, res) => {
    logger.debug('searching for pipelines');
    // find pipelines
    const pipelines = await Pipeline.find({isPublic: true});
    res.status(200).json(pipelines);
};

export default asyncRequest.bind(null, handler);
