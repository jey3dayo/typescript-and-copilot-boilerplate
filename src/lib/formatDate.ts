import ja, { format } from 'date-fns';

export default (v: number | Date, w: string) => format(v, w, { locale: ja });
