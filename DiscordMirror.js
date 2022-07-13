import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
  "NTUwMzU2NjM5OTI5MDczNjg1.GUW2M8.OqIjXj_pshCW5tAm8si8mgHptGsUMTgfQS4qcI"
);

gateway.on("message", (m) => {
  if (m.channel_id === "969020063984275507") {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };

    client.sendWebhook(
      "https://discordapp.com/api/webhooks/996740963429003324/nvsyipkk8gHJ03ch06QhyYCu2xqIgTifQ_XcR2kqtSC74kO3PKwMuJ6JhHvTt_ZD7hNJ",
      content
    );
  }
});
