import { LMStudioClient } from "@lmstudio/sdk";
import { Chat } from "@lmstudio/sdk";

export async function lm_studio(baseurl, language_model, prompt) {
    const client = new LMStudioClient({baseUrl: baseurl});

    const model = await client.llm.model(language_model);

    const chat = Chat.from(prompt);

    const result = await model.respond(chat, {temperature:0.7, num_ctx:-1});
    return result.content;
}

export async function lm_studio_embed(baseurl, language_model, prompt) {
    const client = new LMStudioClient({baseUrl: baseurl});
    const model = await client.embedding.model(language_model);
    const { embedding } = await model.embed(prompt);
    return embedding;
}


