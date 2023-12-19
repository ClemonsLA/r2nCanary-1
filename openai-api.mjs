import OpenAI from "openai";

const openai = new OpenAI({ apiKey: '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' });

async function main() {
const image = await openai.images.generate({ model: "dall-e-3", prompt: "A realistic standard poodle with human-like behavior, an IQ of 180, wearing glasses and a brown sport-jacket, standing on it's hind legs in a large 18th-century library, and staring into the lens", style: "vivid", });
console.log(image.data);
}
main();