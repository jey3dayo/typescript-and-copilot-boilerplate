import formatDate from 'lib/formatDate';
import { sendSlack } from 'lib/slack';

const { NODE_ENV } = process.env;
const today = formatDate(new Date(), `yyyy-MM-dd HH:mm`);

sendSlack(`exec: ${today} in ${NODE_ENV}.`);
