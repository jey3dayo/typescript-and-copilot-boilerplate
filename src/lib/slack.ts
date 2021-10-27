import fetch from 'node-fetch';

const slackWebhookUrl: string | null = process.env?.SLACK_WEBHOOK_URL ?? null;

export const sendSlack = async (msg: string) =>
  process.env.NODE_ENV !== 'development' && slackWebhookUrl
    ? fetch(slackWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: msg,
          link_names: 1,
        }),
      })
    : console.log(msg);
