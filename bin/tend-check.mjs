#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { basename, join, resolve } from "node:path";
// src/lib/fetchJson.ts
var LOOKUP_TIMEOUT_MS = 2e4;
var fetchJson = async (url, body) => {
	const options = { signal: AbortSignal.timeout(LOOKUP_TIMEOUT_MS) };
	if (body !== void 0) {
		options.method = "POST";
		options.headers = { "content-type": "application/json" };
		options.body = JSON.stringify(body);
	}
	const response = await fetch(url, options);
	if (!response.ok) throw new Error(`${response.status} from ${url}`);
	return response.json();
};
var model_retirements_default = {
	checked: "2026-11-20",
	note: "Copied from each provider’s own deprecations page on the checked date. Google lists the earliest possible shutdown date and confirms the exact date later.",
	sources: {
		"OpenAI": "https://developers.openai.com/api/docs/deprecations",
		"Anthropic": "https://platform.claude.com/docs/en/about-claude/model-deprecations",
		"Google": "https://ai.google.dev/gemini-api/docs/deprecations"
	},
	models: [
		{
			"id": "gpt-image-1-mini",
			"provider": "OpenAI",
			"retires": "2026-12-01",
			"replacement": "gpt-image-2.6-sunburst or gpt-image-2.6-flare"
		},
		{
			"id": "gpt-image-1.5",
			"provider": "OpenAI",
			"retires": "2026-12-01",
			"replacement": "gpt-image-2.6-sunburst or gpt-image-2.6-flare"
		},
		{
			"id": "gpt-image-1.5-2025-12-16",
			"provider": "OpenAI",
			"retires": "2026-12-01",
			"replacement": "gpt-image-2.6-sunburst or gpt-image-2.6-flare"
		},
		{
			"id": "chatgpt-image-latest",
			"provider": "OpenAI",
			"retires": "2026-12-01",
			"replacement": "gpt-image-2.6-sunburst or gpt-image-2.6-flare"
		},
		{
			"id": "gpt-5",
			"provider": "OpenAI",
			"retires": "2026-12-11",
			"replacement": "gpt-6.1-sol"
		},
		{
			"id": "gpt-5-2025-08-07",
			"provider": "OpenAI",
			"retires": "2026-12-11",
			"replacement": "gpt-6.1-sol"
		},
		{
			"id": "gpt-5-mini",
			"provider": "OpenAI",
			"retires": "2026-12-11",
			"replacement": "gpt-6.1-terra"
		},
		{
			"id": "gpt-5-mini-2025-08-07",
			"provider": "OpenAI",
			"retires": "2026-12-11",
			"replacement": "gpt-6.1-terra"
		},
		{
			"id": "gpt-5-nano",
			"provider": "OpenAI",
			"retires": "2026-12-11",
			"replacement": "gpt-6-luna"
		},
		{
			"id": "gpt-5-nano-2025-08-07",
			"provider": "OpenAI",
			"retires": "2026-12-11",
			"replacement": "gpt-6-luna"
		},
		{
			"id": "gpt-5-pro",
			"provider": "OpenAI",
			"retires": "2026-12-11",
			"replacement": "gpt-6.1-sol with reasoning mode pro"
		},
		{
			"id": "gpt-5-pro-2025-10-06",
			"provider": "OpenAI",
			"retires": "2026-12-11",
			"replacement": "gpt-6.1-sol with reasoning mode pro"
		},
		{
			"id": "o3",
			"provider": "OpenAI",
			"retires": "2026-12-11",
			"replacement": "gpt-6.1-sol"
		},
		{
			"id": "o3-2025-04-16",
			"provider": "OpenAI",
			"retires": "2026-12-11",
			"replacement": "gpt-6.1-sol"
		},
		{
			"id": "o3-pro",
			"provider": "OpenAI",
			"retires": "2026-12-11",
			"replacement": "gpt-6.1-sol with reasoning mode pro"
		},
		{
			"id": "o3-pro-2025-06-10",
			"provider": "OpenAI",
			"retires": "2026-12-11",
			"replacement": "gpt-6.1-sol with reasoning mode pro"
		},
		{
			"id": "tts-1",
			"provider": "OpenAI",
			"retires": "2027-01-06",
			"replacement": "gpt-realtime-2.1-mini"
		},
		{
			"id": "tts-1-hd",
			"provider": "OpenAI",
			"retires": "2027-01-06",
			"replacement": "gpt-realtime-2.1-mini"
		},
		{
			"id": "gpt-4o-mini-tts",
			"provider": "OpenAI",
			"retires": "2027-01-06",
			"replacement": "gpt-realtime-2.1-mini"
		},
		{
			"id": "gpt-4o-mini-tts-2025-03-20",
			"provider": "OpenAI",
			"retires": "2027-01-06",
			"replacement": "gpt-realtime-2.1-mini"
		},
		{
			"id": "gpt-4o-mini-tts-2025-12-15",
			"provider": "OpenAI",
			"retires": "2027-01-06",
			"replacement": "gpt-realtime-2.1-mini"
		},
		{
			"id": "gpt-4o-2024-08-06",
			"provider": "OpenAI",
			"retires": "2027-01-14",
			"replacement": "gpt-6-luna"
		},
		{
			"id": "gpt-4o-2024-11-20",
			"provider": "OpenAI",
			"retires": "2027-01-14",
			"replacement": "gpt-6-luna"
		},
		{
			"id": "gpt-4o-mini-2024-07-18",
			"provider": "OpenAI",
			"retires": "2027-01-14",
			"replacement": "gpt-6-luna"
		},
		{
			"id": "gpt-4.1-2025-04-14",
			"provider": "OpenAI",
			"retires": "2027-01-14",
			"replacement": "gpt-6-luna"
		},
		{
			"id": "gpt-4.1-mini-2025-04-14",
			"provider": "OpenAI",
			"retires": "2027-01-14",
			"replacement": "gpt-6-luna"
		},
		{
			"id": "gpt-realtime",
			"provider": "OpenAI",
			"retires": "2027-01-20",
			"replacement": "gpt-realtime-2.1"
		},
		{
			"id": "gpt-realtime-2025-08-28",
			"provider": "OpenAI",
			"retires": "2027-01-20",
			"replacement": "gpt-realtime-2.1"
		},
		{
			"id": "gpt-audio",
			"provider": "OpenAI",
			"retires": "2027-01-20",
			"replacement": "gpt-audio-1.5"
		},
		{
			"id": "gpt-audio-2025-08-28",
			"provider": "OpenAI",
			"retires": "2027-01-20",
			"replacement": "gpt-audio-1.5"
		},
		{
			"id": "gpt-4o-audio",
			"provider": "OpenAI",
			"retires": "2027-01-20",
			"replacement": "gpt-audio-1.5"
		},
		{
			"id": "gpt-4o-realtime",
			"provider": "OpenAI",
			"retires": "2027-01-20",
			"replacement": "gpt-realtime-2.1"
		},
		{
			"id": "gpt-realtime-mini",
			"provider": "OpenAI",
			"retires": "2027-01-20",
			"replacement": "gpt-realtime-2.1-mini"
		},
		{
			"id": "gpt-realtime-mini-2025-12-15",
			"provider": "OpenAI",
			"retires": "2027-01-20",
			"replacement": "gpt-realtime-2.1-mini"
		},
		{
			"id": "gpt-audio-mini",
			"provider": "OpenAI",
			"retires": "2027-01-20",
			"replacement": "gpt-audio-1.5"
		},
		{
			"id": "gpt-audio-mini-2025-12-15",
			"provider": "OpenAI",
			"retires": "2027-01-20",
			"replacement": "gpt-audio-1.5"
		},
		{
			"id": "gpt-4o-mini-realtime",
			"provider": "OpenAI",
			"retires": "2027-01-20",
			"replacement": "gpt-realtime-2.1-mini"
		},
		{
			"id": "gpt-4o-mini-audio",
			"provider": "OpenAI",
			"retires": "2027-01-20",
			"replacement": "gpt-audio-1.5"
		},
		{
			"id": "gpt-4o-mini-transcribe-2025-03-20",
			"provider": "OpenAI",
			"retires": "2027-01-20",
			"replacement": "gpt-4o-mini-transcribe-2025-12-15"
		},
		{
			"id": "gpt-image-2",
			"provider": "OpenAI",
			"retires": "2027-02-10",
			"replacement": "gpt-image-2.6-sunburst or gpt-image-2.6-flare"
		},
		{
			"id": "gpt-image-2-2026-04-21",
			"provider": "OpenAI",
			"retires": "2027-02-10",
			"replacement": "gpt-image-2.6-sunburst or gpt-image-2.6-flare"
		},
		{
			"id": "whisper-1",
			"provider": "OpenAI",
			"retires": "2027-02-26",
			"replacement": "gpt-live-transcribe or gpt-transcribe"
		},
		{
			"id": "gpt-4o-transcribe",
			"provider": "OpenAI",
			"retires": "2027-02-26",
			"replacement": "gpt-live-transcribe or gpt-transcribe"
		},
		{
			"id": "gpt-4o-mini-transcribe",
			"provider": "OpenAI",
			"retires": "2027-02-26",
			"replacement": "gpt-live-transcribe or gpt-transcribe"
		},
		{
			"id": "gpt-4o-mini-transcribe-2025-12-15",
			"provider": "OpenAI",
			"retires": "2027-02-26",
			"replacement": "gpt-live-transcribe or gpt-transcribe"
		},
		{
			"id": "gpt-4o-transcribe-diarize",
			"provider": "OpenAI",
			"retires": "2027-02-26",
			"replacement": "gpt-live-transcribe or gpt-transcribe"
		},
		{
			"id": "gpt-5.3-codex",
			"provider": "OpenAI",
			"retires": "2027-04-01",
			"replacement": "gpt-6-sol"
		},
		{
			"id": "gpt-5.4-nano",
			"provider": "OpenAI",
			"retires": "2027-04-01",
			"replacement": "gpt-6-luna"
		},
		{
			"id": "gpt-5.4-nano-2026-03-17",
			"provider": "OpenAI",
			"retires": "2027-04-01",
			"replacement": "gpt-6-luna"
		},
		{
			"id": "gpt-5.1",
			"provider": "OpenAI",
			"retires": "2027-04-01",
			"replacement": "gpt-6-sol"
		},
		{
			"id": "gpt-5.1-2025-11-13",
			"provider": "OpenAI",
			"retires": "2027-04-01",
			"replacement": "gpt-6-sol"
		},
		{
			"id": "gpt-3.5-turbo-0125",
			"provider": "OpenAI",
			"retires": "2026-10-23",
			"replacement": "gpt-5.6-terra"
		},
		{
			"id": "gpt-3.5-turbo",
			"provider": "OpenAI",
			"retires": "2026-10-23",
			"replacement": "gpt-5.6-terra"
		},
		{
			"id": "gpt-4-0613",
			"provider": "OpenAI",
			"retires": "2026-10-23",
			"replacement": "gpt-5.6-sol"
		},
		{
			"id": "gpt-4",
			"provider": "OpenAI",
			"retires": "2026-10-23",
			"replacement": "gpt-5.6-sol"
		},
		{
			"id": "gpt-4-1106-preview",
			"provider": "OpenAI",
			"retires": "2026-10-23",
			"replacement": "gpt-5.6-sol"
		},
		{
			"id": "gpt-4-turbo",
			"provider": "OpenAI",
			"retires": "2026-10-23",
			"replacement": "gpt-5.6-sol"
		},
		{
			"id": "gpt-4-turbo-2024-04-09",
			"provider": "OpenAI",
			"retires": "2026-10-23",
			"replacement": "gpt-5.6-sol"
		},
		{
			"id": "gpt-4.1-nano",
			"provider": "OpenAI",
			"retires": "2026-10-23",
			"replacement": "gpt-5.6-luna"
		},
		{
			"id": "gpt-4.1-nano-2025-04-14",
			"provider": "OpenAI",
			"retires": "2026-10-23",
			"replacement": "gpt-5.6-luna"
		},
		{
			"id": "gpt-4o-2024-05-13",
			"provider": "OpenAI",
			"retires": "2026-10-23",
			"replacement": "gpt-5.6-sol"
		},
		{
			"id": "gpt-image-1",
			"provider": "OpenAI",
			"retires": "2026-10-23",
			"replacement": "gpt-image-2.5-sunburst or gpt-image-2.5-flare"
		},
		{
			"id": "o1-2024-12-17",
			"provider": "OpenAI",
			"retires": "2026-10-23",
			"replacement": "gpt-5.6-sol"
		},
		{
			"id": "o1",
			"provider": "OpenAI",
			"retires": "2026-10-23",
			"replacement": "gpt-5.6-sol"
		},
		{
			"id": "o1-pro-2025-03-19",
			"provider": "OpenAI",
			"retires": "2026-10-23",
			"replacement": "gpt-5.6-sol with reasoning mode pro"
		},
		{
			"id": "o1-pro",
			"provider": "OpenAI",
			"retires": "2026-10-23",
			"replacement": "gpt-5.6-sol with reasoning mode pro"
		},
		{
			"id": "o3-mini-2025-01-31",
			"provider": "OpenAI",
			"retires": "2026-10-23",
			"replacement": "gpt-5.6-sol"
		},
		{
			"id": "o3-mini",
			"provider": "OpenAI",
			"retires": "2026-10-23",
			"replacement": "gpt-5.6-sol"
		},
		{
			"id": "o4-mini-2025-04-16",
			"provider": "OpenAI",
			"retires": "2026-10-23",
			"replacement": "gpt-5.6-terra"
		},
		{
			"id": "o4-mini",
			"provider": "OpenAI",
			"retires": "2026-10-23",
			"replacement": "gpt-5.6-terra"
		},
		{
			"id": "gpt-3.5-turbo-instruct",
			"provider": "OpenAI",
			"retires": "2026-09-28",
			"replacement": "gpt-5.6-terra"
		},
		{
			"id": "babbage-002",
			"provider": "OpenAI",
			"retires": "2026-09-28",
			"replacement": "gpt-5.6-terra"
		},
		{
			"id": "davinci-002",
			"provider": "OpenAI",
			"retires": "2026-09-28",
			"replacement": "gpt-5.6-terra"
		},
		{
			"id": "gpt-3.5-turbo-1106",
			"provider": "OpenAI",
			"retires": "2026-09-28",
			"replacement": "gpt-5.6-terra"
		},
		{
			"id": "gpt-5.2-chat-latest",
			"provider": "OpenAI",
			"retires": "2026-08-10",
			"replacement": "gpt-5.6-sol"
		},
		{
			"id": "gpt-5.3-chat-latest",
			"provider": "OpenAI",
			"retires": "2026-08-10",
			"replacement": "gpt-5.6-sol"
		},
		{
			"id": "computer-use-preview-2025-03-11",
			"provider": "OpenAI",
			"retires": "2026-07-23",
			"replacement": "gpt-5.6-terra"
		},
		{
			"id": "computer-use-preview",
			"provider": "OpenAI",
			"retires": "2026-07-23",
			"replacement": "gpt-5.6-terra"
		},
		{
			"id": "gpt-4o-mini-search-preview-2025-03-11",
			"provider": "OpenAI",
			"retires": "2026-07-23",
			"replacement": "gpt-5.6-terra"
		},
		{
			"id": "gpt-4o-search-preview-2025-03-11",
			"provider": "OpenAI",
			"retires": "2026-07-23",
			"replacement": "gpt-5.6-terra"
		},
		{
			"id": "gpt-5-chat-latest",
			"provider": "OpenAI",
			"retires": "2026-07-23",
			"replacement": "gpt-5.6-sol"
		},
		{
			"id": "gpt-5-codex",
			"provider": "OpenAI",
			"retires": "2026-07-23",
			"replacement": "gpt-5.6-sol"
		},
		{
			"id": "gpt-5.1-chat-latest",
			"provider": "OpenAI",
			"retires": "2026-07-23",
			"replacement": "gpt-5.6-sol"
		},
		{
			"id": "gpt-5.1-codex",
			"provider": "OpenAI",
			"retires": "2026-07-23",
			"replacement": "gpt-5.6-sol"
		},
		{
			"id": "gpt-5.1-codex-max",
			"provider": "OpenAI",
			"retires": "2026-07-23",
			"replacement": "gpt-5.6-sol"
		},
		{
			"id": "gpt-5.1-codex-mini",
			"provider": "OpenAI",
			"retires": "2026-07-23",
			"replacement": "gpt-5.6-terra"
		},
		{
			"id": "gpt-audio-mini-2025-10-06",
			"provider": "OpenAI",
			"retires": "2026-07-23",
			"replacement": "gpt-audio-1.5"
		},
		{
			"id": "gpt-realtime-mini-2025-10-06",
			"provider": "OpenAI",
			"retires": "2026-07-23",
			"replacement": "gpt-realtime-2.1-mini"
		},
		{
			"id": "o3-deep-research-2025-06-26",
			"provider": "OpenAI",
			"retires": "2026-07-23",
			"replacement": "gpt-5.6-sol"
		},
		{
			"id": "o3-deep-research",
			"provider": "OpenAI",
			"retires": "2026-07-23",
			"replacement": "gpt-5.6-sol"
		},
		{
			"id": "o4-mini-deep-research-2025-06-26",
			"provider": "OpenAI",
			"retires": "2026-07-23",
			"replacement": "gpt-5.6-sol"
		},
		{
			"id": "o4-mini-deep-research",
			"provider": "OpenAI",
			"retires": "2026-07-23",
			"replacement": "gpt-5.6-sol"
		},
		{
			"id": "gpt-5.2-codex",
			"provider": "OpenAI",
			"retires": "2026-07-23",
			"replacement": "gpt-5.6-sol"
		},
		{
			"id": "claude-sonnet-4-5-20250929",
			"provider": "Anthropic",
			"retires": "2026-11-30",
			"replacement": "claude-sonnet-5-5"
		},
		{
			"id": "claude-sonnet-4-5",
			"provider": "Anthropic",
			"retires": "2026-11-30",
			"replacement": "claude-sonnet-5-5"
		},
		{
			"id": "claude-opus-4-1-20250805",
			"provider": "Anthropic",
			"retires": "2026-08-05",
			"replacement": "claude-opus-4-8"
		},
		{
			"id": "claude-sonnet-4-20250514",
			"provider": "Anthropic",
			"retires": "2026-06-15",
			"replacement": "claude-sonnet-5-5"
		},
		{
			"id": "claude-opus-4-20250514",
			"provider": "Anthropic",
			"retires": "2026-06-15",
			"replacement": "claude-opus-4-8"
		},
		{
			"id": "claude-3-haiku-20240307",
			"provider": "Anthropic",
			"retires": "2026-04-20",
			"replacement": "claude-haiku-4-5-20251001"
		},
		{
			"id": "claude-3-5-haiku-20241022",
			"provider": "Anthropic",
			"retires": "2026-02-19",
			"replacement": "claude-haiku-4-5-20251001"
		},
		{
			"id": "claude-3-7-sonnet-20250219",
			"provider": "Anthropic",
			"retires": "2026-02-19",
			"replacement": "claude-sonnet-5-5"
		},
		{
			"id": "claude-3-opus-20240229",
			"provider": "Anthropic",
			"retires": "2026-01-05",
			"replacement": "claude-opus-4-8"
		},
		{
			"id": "claude-3-5-sonnet-20240620",
			"provider": "Anthropic",
			"retires": "2025-10-28",
			"replacement": "claude-sonnet-5-5"
		},
		{
			"id": "claude-3-5-sonnet-20241022",
			"provider": "Anthropic",
			"retires": "2025-10-28",
			"replacement": "claude-sonnet-5-5"
		},
		{
			"id": "gemini-2.5-computer-use-preview-10-2025",
			"provider": "Google",
			"retires": "2026-07-28",
			"replacement": "gemini-3.8-flash"
		},
		{
			"id": "imagen-4.0-generate-001",
			"provider": "Google",
			"retires": "2026-08-17",
			"replacement": "gemini-nano-banana-2.1"
		},
		{
			"id": "imagen-4.0-ultra-generate-001",
			"provider": "Google",
			"retires": "2026-08-17",
			"replacement": "gemini-nano-banana-2.1"
		},
		{
			"id": "imagen-4.0-fast-generate-001",
			"provider": "Google",
			"retires": "2026-08-17",
			"replacement": "gemini-nano-banana-2.1"
		},
		{
			"id": "veo-3.1-lite-generate-preview",
			"provider": "Google",
			"retires": "2026-10-22",
			"replacement": "gemini-omni-1.1-flash"
		},
		{
			"id": "veo-3.1-generate-preview",
			"provider": "Google",
			"retires": "2026-10-22",
			"replacement": "gemini-omni-1.1-flash"
		},
		{
			"id": "veo-3.1-fast-generate-preview",
			"provider": "Google",
			"retires": "2026-10-22",
			"replacement": "gemini-omni-1.1-flash"
		},
		{
			"id": "gemini-omni-flash-preview",
			"provider": "Google",
			"retires": "2026-10-22",
			"replacement": "gemini-omni-1.1-flash"
		},
		{
			"id": "gemini-3.1-flash-tts-preview",
			"provider": "Google",
			"retires": "2026-11-17",
			"replacement": "gemini-3.8-flash-tts or gemini-3.8-flash-lite-tts"
		},
		{
			"id": "gemini-3.1-flash-live-preview",
			"provider": "Google",
			"retires": "2026-11-17",
			"replacement": "gemini-3.8-live"
		},
		{
			"id": "gemini-2.5-flash-native-audio-preview-12-2025",
			"provider": "Google",
			"retires": "2026-11-17",
			"replacement": "gemini-3.8-live"
		},
		{
			"id": "gemini-2.5-flash-preview-tts",
			"provider": "Google",
			"retires": "2026-11-17",
			"replacement": "gemini-3.8-flash-tts or gemini-3.8-flash-lite-tts"
		},
		{
			"id": "gemini-2.5-pro-preview-tts",
			"provider": "Google",
			"retires": "2026-11-17",
			"replacement": "gemini-3.8-flash-tts or gemini-3.8-flash-lite-tts"
		},
		{
			"id": "gemini-2.5-flash-image",
			"provider": "Google",
			"retires": "2027-03-15",
			"replacement": "gemini-3.1-flash-lite-image"
		},
		{
			"id": "gemini-3.1-flash-lite",
			"provider": "Google",
			"retires": "2027-05-07",
			"replacement": "gemini-3.5-flash-lite"
		},
		{
			"id": "gemini-embedding-001",
			"provider": "Google",
			"retires": "2028-05-14",
			"replacement": "gemini-embedding-2"
		}
	]
};
var package_default = {
	name: "tend-check",
	version: "0.1.0",
	description: "Tells you what your AI-built app needs this week: security holes to patch, AI models about to be switched off, and versions that no longer get fixes.",
	type: "module",
	bin: { "tend-check": "bin/tend-check.mjs" },
	files: ["bin"],
	engines: { "node": ">=18" },
	homepage: "https://tend.sreeships.com",
	repository: {
		"type": "git",
		"url": "git+https://github.com/sree-data/tend.git"
	},
	author: "Sree",
	license: "UNLICENSED",
	keywords: [
		"maintenance",
		"dependencies",
		"security",
		"ai-models",
		"coding-agent"
	]
};
// src/lib/semver.ts
function parseVersion(text) {
	const match = /^v?(\d+)(?:\.(\d+))?(?:\.(\d+))?/.exec(String(text ?? "").trim());
	if (!match) return null;
	return {
		major: Number(match[1]),
		minor: Number(match[2] ?? 0),
		patch: Number(match[3] ?? 0)
	};
}
function compareVersions(a, b) {
	const left = parseVersion(a);
	const right = parseVersion(b);
	if (!left || !right) return 0;
	for (const part of [
		"major",
		"minor",
		"patch"
	]) if (left[part] !== right[part]) return left[part] < right[part] ? -1 : 1;
	return 0;
}
function minVersionOfRange(spec) {
	const text = String(spec ?? "").trim();
	if (!text || /[:/]/.test(text)) return null;
	const match = /(\d+(?:\.\d+){0,2})/.exec(text);
	return match ? match[1] : null;
}
function majorsBehind(current, latest) {
	const have = parseVersion(current);
	const newest = parseVersion(latest);
	if (!have || !newest) return 0;
	return Math.max(0, newest.major - have.major);
}
// src/lib/osv.ts
var API = "https://api.osv.dev/v1";
var BATCH = 500;
var PARALLEL = 8;
var SEVERITY = {
	CRITICAL: "critical",
	HIGH: "high",
	MODERATE: "moderate",
	MEDIUM: "moderate",
	LOW: "low"
};
function buildBatchQuery(packages, ecosystem) {
	return { queries: packages.map(({ name, version }) => ({
		package: {
			name,
			ecosystem
		},
		version
	})) };
}
var sameName = (a, b) => {
	const plain = (name) => String(name ?? "").toLowerCase().replace(/[-_.]+/g, "-");
	return plain(a) === plain(b);
};
function interpretAdvisory(advisory, packageName, installedVersion) {
	const fixes = [];
	for (const affected of advisory.affected ?? []) {
		if (!sameName(affected.package?.name, packageName)) continue;
		for (const range of affected.ranges ?? []) for (const event of range.events ?? []) if (event.fixed && compareVersions(event.fixed, installedVersion) > 0) fixes.push(event.fixed);
	}
	fixes.sort(compareVersions);
	const firstLine = String(advisory.details ?? "").split("\n")[0].trim();
	return {
		id: advisory.id,
		cve: (advisory.aliases ?? []).find((alias) => alias.startsWith("CVE-")) ?? null,
		summary: (advisory.summary || firstLine || "No description was published").replace(/`/g, ""),
		severity: SEVERITY[String(advisory.database_specific?.severity ?? "").toUpperCase()] ?? "unknown",
		fixedIn: fixes[0] ?? null,
		url: `https://osv.dev/vulnerability/${advisory.id}`
	};
}
async function findVulnerabilities(packages, ecosystem, fetchJson) {
	if (!packages.length) return [];
	const idsPerPackage = [];
	for (let start = 0; start < packages.length; start += BATCH) {
		const slice = packages.slice(start, start + BATCH);
		const response = await fetchJson(`${API}/querybatch`, buildBatchQuery(slice, ecosystem));
		for (const result of response.results ?? []) idsPerPackage.push((result.vulns ?? []).map((vuln) => vuln.id));
	}
	const uniqueIds = [...new Set(idsPerPackage.flat())];
	const details = /* @__PURE__ */ new Map();
	for (let start = 0; start < uniqueIds.length; start += PARALLEL) {
		const slice = uniqueIds.slice(start, start + PARALLEL);
		const loaded = await Promise.all(slice.map((id) => fetchJson(`${API}/vulns/${id}`)));
		slice.forEach((id, index) => details.set(id, loaded[index]));
	}
	const found = [];
	packages.forEach((pkg, index) => {
		const live = (idsPerPackage[index] ?? []).map((id) => details.get(id)).filter((advisory) => Boolean(advisory) && !advisory.withdrawn);
		if (!live.length) return;
		found.push({
			...pkg,
			advisories: live.map((advisory) => interpretAdvisory(advisory, pkg.name, pkg.version))
		});
	});
	return found;
}
// src/lib/registry.ts
async function latestVersions(packages, ecosystem, fetchJson) {
	const latest = /* @__PURE__ */ new Map();
	let failed = 0;
	await Promise.all(packages.map(async ({ name }) => {
		try {
			if (ecosystem === "PyPI") {
				const data = await fetchJson(`https://pypi.org/pypi/${encodeURIComponent(name)}/json`);
				if (data?.info?.version) latest.set(name, data.info.version);
			} else {
				const data = await fetchJson(`https://registry.npmjs.org/${name.replace("/", "%2F")}/latest`);
				if (data?.version) latest.set(name, data.version);
			}
		} catch {
			failed += 1;
		}
	}));
	if (packages.length > 0 && failed === packages.length) throw new Error("The registry could not be reached.");
	return latest;
}
// src/lib/dates.ts
var DAY = 864e5;
var MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
var utc = (iso) => {
	const [year, month, day] = String(iso).slice(0, 10).split("-").map(Number);
	return Date.UTC(year, month - 1, day);
};
function daysBetween(fromIso, toIso) {
	return Math.round((utc(toIso) - utc(fromIso)) / DAY);
}
function formatDate(iso) {
	const [year, month, day] = String(iso ?? "").slice(0, 10).split("-").map(Number);
	if (!year || !MONTHS[month - 1] || !day) return String(iso ?? "");
	return `${day} ${MONTHS[month - 1]} ${year}`;
}
function todayIso(now = /* @__PURE__ */ new Date()) {
	const pad = (n) => String(n).padStart(2, "0");
	return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}
// src/lib/runtime.ts
var SOON_DAYS = 90;
function runtimeStatus(name, version, cycles, today) {
	const cycle = cycles.find((entry) => String(entry.cycle) === String(version));
	if (!cycle) return null;
	const eol = typeof cycle.eol === "string" ? cycle.eol : null;
	let status = cycle.eol === true ? "ended" : "ok";
	if (eol) {
		const daysLeft = daysBetween(today, eol);
		if (daysLeft <= 0) status = "ended";
		else if (daysLeft <= SOON_DAYS) status = "ending-soon";
	}
	return {
		name,
		version: String(version),
		status,
		eol,
		moveTo: newestStable(cycles, today)
	};
}
function newestStable(cycles, today) {
	const supported = (entry) => entry.eol !== true && !(typeof entry.eol === "string" && daysBetween(today, entry.eol) <= 0);
	const longTermNow = (entry) => entry.lts === true || typeof entry.lts === "string" && daysBetween(entry.lts, today) >= 0;
	const hasLongTermFlag = cycles.some((entry) => "lts" in entry);
	const sorted = [...cycles.filter((entry) => supported(entry) && (!hasLongTermFlag || longTermNow(entry)))].sort((a, b) => compareVersions(String(b.cycle), String(a.cycle)));
	return sorted.length ? String(sorted[0].cycle) : null;
}
// src/lib/models.ts
function findModelRetirements(modelIds, table, today) {
	const byId = new Map(table.models.map((model) => [model.id.toLowerCase(), model]));
	const matches = [];
	const unlisted = [];
	const seen = /* @__PURE__ */ new Set();
	for (const raw of modelIds) {
		const id = String(raw ?? "").trim();
		if (!id) continue;
		const bare = id.slice(id.lastIndexOf("/") + 1).toLowerCase();
		if (seen.has(bare)) continue;
		seen.add(bare);
		const entry = byId.get(id.toLowerCase()) ?? byId.get(bare);
		if (!entry || !/^\d{4}-\d{2}-\d{2}$/.test(String(entry.retires))) {
			unlisted.push(id);
			continue;
		}
		const daysLeft = daysBetween(today, entry.retires);
		matches.push({
			...entry,
			status: daysLeft <= 0 ? "retired" : "retiring",
			daysLeft
		});
	}
	return {
		matches,
		unlisted
	};
}
// src/lib/findings.ts
var URGENCY_ORDER = {
	now: 0,
	soon: 1,
	later: 2
};
var KIND_ORDER = {
	security: 0,
	model: 1,
	runtime: 2,
	behind: 3
};
var SEVERITY_RANK = {
	critical: 4,
	high: 3,
	unknown: 2,
	moderate: 2,
	low: 1
};
var RUNTIME_NAMES = {
	node: "Node",
	python: "Python"
};
var FAR_BEHIND = 2;
var CHECK_AND_REPORT = "Then run the tests if there are any, start the app and check that the main screens still work. Tell me exactly what you changed. If this needs changes to my own code, list them and wait for my OK before making them.";
function buildFindings({ vulnerabilities = [], packages = [], latest = /* @__PURE__ */ new Map(), runtimes = [], models = [] }) {
	const flagged = new Set(vulnerabilities.map((pkg) => pkg.name));
	const twice = new Set(vulnerabilities.map((pkg) => pkg.name).filter((name, at, all) => all.indexOf(name) !== at));
	return [
		...vulnerabilities.map((pkg) => securityFinding(pkg, twice.has(pkg.name))),
		...models.map(modelFinding),
		...runtimes.map(runtimeFinding).filter((finding) => finding !== null),
		...behindFinding(packages, latest, flagged)
	].sort((a, b) => URGENCY_ORDER[a.urgency] - URGENCY_ORDER[b.urgency] || KIND_ORDER[a.kind] - KIND_ORDER[b.kind]);
}
function summarize(findings) {
	const counts = {
		now: 0,
		soon: 0,
		later: 0
	};
	for (const finding of findings) counts[finding.urgency] += 1;
	return counts;
}
function securityFinding(pkg, nameVersion = false) {
	const worst = pkg.advisories.reduce((a, b) => SEVERITY_RANK[b.severity] > SEVERITY_RANK[a.severity] ? b : a);
	const fixes = pkg.advisories.map((advisory) => advisory.fixedIn).filter((fix) => Boolean(fix)).sort(compareVersions);
	const fixedIn = fixes.length === pkg.advisories.length ? fixes[fixes.length - 1] : null;
	const partFix = !fixedIn && fixes.length ? fixes[fixes.length - 1] : null;
	let urgency = worst.severity === "critical" || worst.severity === "high" ? "now" : worst.severity === "low" ? "later" : "soon";
	if (pkg.dev && urgency === "now") urgency = "soon";
	const ids = pkg.advisories.map((advisory) => advisory.cve ?? advisory.id).join(", ");
	const count = pkg.advisories.length;
	const several = count > 1;
	const parts = [`${several ? "The most serious: " : ""}${trimPeriod(worst.summary)}.`, fixedIn ? `You have ${pkg.version}. ${several ? `All ${count} are` : "It is"} fixed in ${fixedIn}.` : partFix ? `You have ${pkg.version}. Updating to ${partFix} fixes ${fixes.length} of the ${count}; the rest have no fix yet.` : `You have ${pkg.version}. No fixed version has been published yet.`];
	if (!pkg.direct) parts.push("Your app did not ask for this package itself. It comes along with something else you use.");
	if (pkg.dev) parts.push("It is only used while building the app, not by your visitors.");
	const problems = several ? `${count} known security problems` : "a known security problem";
	const prompt = fixedIn ? `Update the package ${pkg.name} from ${pkg.version} to ${fixedIn} or newer. It has ${problems} (${ids}). First tell me where the app uses ${pkg.name}. ${CHECK_AND_REPORT}` : partFix ? `Update the package ${pkg.name} from ${pkg.version} to ${partFix} or newer. It has ${problems} (${ids}); that version fixes ${fixes.length} of them and the rest have no fix yet. First tell me where the app uses ${pkg.name} and whether the unfixed parts are used. ${CHECK_AND_REPORT}` : `The package ${pkg.name} (version ${pkg.version}) has ${problems} (${ids}) and there is no fixed version yet. Tell me where the app uses ${pkg.name}, whether the risky part is actually used, and what my options are. Do not change anything yet.`;
	const who = nameVersion ? `${pkg.name} ${pkg.version}` : pkg.name;
	return {
		id: `security:${pkg.name}@${pkg.version}`,
		kind: "security",
		urgency,
		title: several ? `${who} has ${count} known security holes` : `${who} has a known security hole`,
		body: parts.join(" "),
		prompt,
		links: pkg.advisories.map((advisory) => ({
			label: advisory.cve ?? advisory.id,
			url: advisory.url
		}))
	};
}
function modelFinding(model) {
	const retired = model.status === "retired";
	const urgency = retired || model.daysLeft <= 30 ? "now" : model.daysLeft <= 90 ? "soon" : "later";
	const when = formatDate(model.retires);
	let title;
	if (retired) title = `${model.id} was switched off on ${when}`;
	else if (model.daysLeft <= 30) title = `${model.id} is switched off in ${model.daysLeft} ${model.daysLeft === 1 ? "day" : "days"}`;
	else title = `${model.id} is switched off on ${when}`;
	const named = model.replacement.trim();
	const advice = named ? `The replacement they recommend is ${named}.` : `${model.provider} has not named a replacement.`;
	const body = retired ? `${model.provider} no longer answers requests to this model, so any part of your app that calls it is failing. ${advice}` : `${model.provider} will stop answering requests to this model on ${when}. After that, any part of your app that calls it fails. ${advice}`;
	const opening = `My app calls the AI model ${model.id}, which ${retired ? "was" : "will be"} switched off on ${when}. `;
	const prompt = named ? opening + `Find every place the app names this model, including settings and environment files. Replace it with ${named}. Then send one real request to confirm it works, and tell me if the answers look different from before. Tell me exactly what you changed.` : opening + `Find every place the app names this model, including settings and environment files, and list them. Show me which current ${model.provider} models could take its place and what would change with each. Change nothing until I pick one.`;
	return {
		id: `model:${model.id}`,
		kind: "model",
		urgency,
		title,
		body,
		prompt,
		links: []
	};
}
function runtimeFinding(runtime) {
	if (runtime.status === "ok") return null;
	const ended = runtime.status === "ended";
	if (!ended && !runtime.eol) return null;
	const engine = RUNTIME_NAMES[runtime.name] ?? runtime.name;
	const label = `${engine} ${runtime.version}`;
	const on = runtime.eol ? ` on ${formatDate(runtime.eol)}` : "";
	const move = runtime.moveTo ? `Move it to ${engine} ${runtime.moveTo}. ` : `Move it to the current long-term version of ${engine}. `;
	const current = runtime.moveTo ? ` The current long-term version is ${engine} ${runtime.moveTo}.` : "";
	return {
		id: `runtime:${runtime.name}`,
		kind: "runtime",
		urgency: ended ? "soon" : "later",
		title: ended ? on ? `${label} stopped getting security fixes${on}` : `${label} no longer gets security fixes` : `${label} stops getting security fixes${on}`,
		body: ended ? `This is the engine your app runs on. New security holes found in it are no longer repaired.${current}` : `This is the engine your app runs on. After that date, new security holes found in it are no longer repaired.${current}`,
		prompt: `My app runs on ${label}, which ${ended ? on ? `stopped getting security fixes${on}` : "no longer gets security fixes" : `stops getting security fixes${on}`}. ${move}First check which of my packages need updating for that. ${CHECK_AND_REPORT}`,
		links: []
	};
}
function behindFinding(packages, latest, flagged) {
	const behind = packages.filter((pkg) => pkg.direct && !flagged.has(pkg.name) && latest.has(pkg.name)).map((pkg) => ({
		...pkg,
		newest: latest.get(pkg.name),
		gap: majorsBehind(pkg.version, latest.get(pkg.name))
	})).filter((pkg) => pkg.gap >= FAR_BEHIND).sort((a, b) => b.gap - a.gap);
	if (!behind.length) return [];
	const list = behind.map((pkg) => `${pkg.name} (you have ${parseVersion(pkg.version)?.major}, newest is ${parseVersion(pkg.newest)?.major})`).join(", ");
	const count = behind.length;
	return [{
		id: "behind",
		kind: "behind",
		urgency: "later",
		title: count === 1 ? "1 package is far behind" : `${count} packages are far behind`,
		body: `${list}. Nothing is broken today. The further behind a package falls, the harder the eventual update gets, and old versions stop receiving fixes.`,
		prompt: `These packages in my app are several major versions behind: ${list}. Do not update anything yet. For each one, tell me in plain words what would break if we updated it, and suggest an order for doing them one at a time.`,
		links: []
	}];
}
function trimPeriod(text) {
	return String(text).trim().replace(/\.$/, "");
}
// src/lib/check.ts
var RUNTIME_FEEDS = {
	node: "https://endoflife.date/api/nodejs.json",
	python: "https://endoflife.date/api/python.json"
};
var MAX_LATEST_LOOKUPS = 80;
async function runCheck({ stack, extraModels = [], today, fetchJson, modelTable }) {
	const missed = [];
	const attempt = async (label, work, fallback) => {
		try {
			return await work();
		} catch {
			missed.push(label);
			return fallback;
		}
	};
	const direct = stack.packages.filter((pkg) => pkg.direct).slice(0, MAX_LATEST_LOOKUPS);
	const runtimeNames = Object.keys(stack.runtime ?? {}).filter((name) => RUNTIME_FEEDS[name]);
	const [vulnerabilities, latest, runtimes] = await Promise.all([
		attempt("security", () => findVulnerabilities(stack.packages, stack.ecosystem, fetchJson), []),
		attempt("versions", () => latestVersions(direct, stack.ecosystem, fetchJson), /* @__PURE__ */ new Map()),
		attempt("runtime", async () => {
			return (await Promise.all(runtimeNames.map(async (name) => {
				const cycles = await fetchJson(RUNTIME_FEEDS[name]);
				return runtimeStatus(name, stack.runtime[name], cycles, today);
			}))).filter((report) => report !== null);
		}, [])
	]);
	const modelIds = [];
	const seenModels = /* @__PURE__ */ new Set();
	for (const id of [...stack.models ?? [], ...extraModels].map((raw) => String(raw).trim()).filter(Boolean)) {
		const key = id.slice(id.lastIndexOf("/") + 1).toLowerCase();
		if (!seenModels.has(key)) {
			seenModels.add(key);
			modelIds.push(id);
		}
	}
	const { matches: models, unlisted: unlistedModels } = findModelRetirements(modelIds, modelTable, today);
	const findings = buildFindings({
		vulnerabilities,
		packages: stack.packages,
		latest,
		runtimes,
		models
	});
	return {
		findings,
		summary: summarize(findings),
		checked: {
			packages: stack.packages.length,
			exact: Boolean(stack.exact),
			models: modelIds.length,
			runtimes: runtimeNames.length
		},
		skipped: stack.skipped ?? [],
		unlistedModels,
		missed
	};
}
// src/lib/parse.ts
var empty = (source) => ({
	source,
	packages: [],
	skipped: [],
	runtime: {},
	models: []
});
function parseStack(input) {
	const text = stripCodeFence(String(input ?? "")).trim();
	if (!text) return empty("empty");
	if (text.startsWith("{")) {
		let data;
		try {
			data = JSON.parse(text);
		} catch {
			return empty("unknown");
		}
		if (data.tend) return fromCard(data);
		if (data.lockfileVersion || data.packages) return fromLockfile(data);
		if (data.dependencies || data.devDependencies) return fromPackageJson(data);
		return empty("unknown");
	}
	if (looksLikeRequirements(text)) return fromRequirements(text);
	return empty("unknown");
}
function stripCodeFence(text) {
	const match = /```[a-z]*\s*\n([\s\S]*?)\n\s*```/i.exec(text);
	return match ? match[1] : text;
}
function cycleOf(name, version) {
	const parsed = parseVersion(minVersionOfRange(version) ?? version);
	if (!parsed) return void 0;
	return name === "python" ? `${parsed.major}.${parsed.minor}` : String(parsed.major);
}
function runtimeFrom(raw = {}) {
	const runtime = {};
	for (const name of ["node", "python"]) {
		const cycle = raw[name] ? cycleOf(name, raw[name]) : void 0;
		if (cycle) runtime[name] = cycle;
	}
	return runtime;
}
var isObject = (value) => Boolean(value) && typeof value === "object" && !Array.isArray(value);
function fromCard(data) {
	const packages = [];
	const skipped = [];
	for (const [name, version] of Object.entries(isObject(data.packages) ? data.packages : {})) {
		const text = version === null || version === void 0 ? "" : String(version).trim();
		if (text) packages.push({
			name,
			version: text,
			direct: true,
			dev: false
		});
		else skipped.push({
			name,
			reason: "no version given"
		});
	}
	const python = /pypi|python/i.test(String(data.ecosystem ?? ""));
	const models = Array.isArray(data.models) ? data.models : typeof data.models === "string" ? [data.models] : [];
	return {
		source: "card",
		ecosystem: python ? "PyPI" : "npm",
		exact: true,
		packages,
		skipped,
		runtime: runtimeFrom(isObject(data.runtime) ? data.runtime : {}),
		models: models.map((model) => String(model).trim()).filter(Boolean)
	};
}
function fromPackageJson(data) {
	const packages = [];
	const skipped = [];
	const read = (deps, dev) => {
		for (const [name, spec] of Object.entries(deps ?? {})) {
			const version = minVersionOfRange(spec);
			if (version) packages.push({
				name,
				version,
				direct: true,
				dev
			});
			else skipped.push({
				name,
				reason: /[:/]/.test(String(spec)) ? "not installed from the public registry" : "no version given"
			});
		}
	};
	read(data.dependencies, false);
	read(data.devDependencies, true);
	return {
		source: "package.json",
		ecosystem: "npm",
		exact: false,
		packages,
		skipped,
		runtime: runtimeFrom(data.engines),
		models: []
	};
}
function fromLockfile(data) {
	const root = data.packages?.[""] ?? {};
	const asked = /* @__PURE__ */ new Set([...Object.keys(root.dependencies ?? {}), ...Object.keys(root.devDependencies ?? {})]);
	const seen = /* @__PURE__ */ new Set();
	const packages = [];
	const add = (name, version, dev) => {
		const key = `${name}@${version}`;
		if (!version || seen.has(key)) return;
		seen.add(key);
		packages.push({
			name,
			version,
			direct: asked.has(name),
			dev: Boolean(dev)
		});
	};
	for (const [path, entry] of Object.entries(isObject(data.packages) ? data.packages : {})) {
		const at = path.lastIndexOf("node_modules/");
		if (at < 0 || !isObject(entry) || entry.link) continue;
		add(path.slice(at + 13), entry.version, entry.dev);
	}
	if (!data.packages) {
		const walk = (deps, depth) => {
			if (!isObject(deps) || depth > 50) return;
			for (const [name, entry] of Object.entries(deps)) {
				if (!isObject(entry)) continue;
				add(name, entry.version, entry.dev);
				walk(entry.dependencies, depth + 1);
			}
		};
		walk(data.dependencies, 0);
	}
	return {
		source: "package-lock.json",
		ecosystem: "npm",
		exact: true,
		packages,
		skipped: [],
		runtime: runtimeFrom(root.engines),
		models: []
	};
}
var requirementLine = /^([A-Za-z0-9][A-Za-z0-9._-]*)\s*(?:\[[^\]]*\])?\s*(?:(@)|(===|==|>=|~=|<=|>|<|!=)\s*([^\s;,]+))?/;
function looksLikeRequirements(text) {
	const lines = meaningfulLines(text);
	if (!lines.length) return false;
	const pinned = lines.filter((line) => /^[A-Za-z0-9][A-Za-z0-9._-]*\s*(\[[^\]]*\])?\s*(===|==|>=|~=|>\s*\d)/.test(line));
	const bare = lines.filter((line) => /^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(line));
	return pinned.length > 0 && pinned.length + bare.length >= lines.length / 2;
}
function meaningfulLines(text) {
	return text.split("\n").map((line) => line.split("#")[0].trim()).filter((line) => line && !line.startsWith("-"));
}
function fromRequirements(text) {
	const packages = [];
	const skipped = [];
	let exact = true;
	const seen = /* @__PURE__ */ new Set();
	for (const line of meaningfulLines(text)) {
		const match = requirementLine.exec(line);
		if (!match) continue;
		const [, name, url, operator, raw] = match;
		const key = name.toLowerCase().replace(/[-_.]+/g, "-");
		if (seen.has(key)) continue;
		seen.add(key);
		if (url) {
			skipped.push({
				name,
				reason: "not installed from the public registry"
			});
			exact = false;
			continue;
		}
		const version = raw?.replace(/(\.\*)+$/, "");
		if (!version || !/\d/.test(version)) {
			skipped.push({
				name,
				reason: "no version given"
			});
			exact = false;
			continue;
		}
		if (operator !== "==" && operator !== "===" || version !== raw) exact = false;
		packages.push({
			name,
			version,
			direct: true,
			dev: false
		});
	}
	return {
		source: "requirements.txt",
		ecosystem: "PyPI",
		exact,
		packages,
		skipped,
		runtime: {},
		models: []
	};
}
// src/cli/project.ts
var MAX_BYTES = 3e7;
function read(dir, file) {
	const path = join(dir, file);
	try {
		if (!existsSync(path)) return null;
		const text = readFileSync(path, "utf8");
		return text.length > MAX_BYTES ? null : text;
	} catch {
		return null;
	}
}
function usable(text) {
	if (!text) return null;
	const stack = parseStack(text);
	return stack.source === "unknown" || stack.source === "empty" ? null : stack;
}
function versionFrom(dir, name, files) {
	for (const file of files) {
		const text = read(dir, file);
		const found = text && /\d+(\.\d+){0,2}/.exec(text.trim().split("\n")[0]);
		const cycle = found ? cycleOf(name, found[0]) : void 0;
		if (cycle) return cycle;
	}
}
function readProject(directory) {
	const dir = resolve(directory);
	const stacks = [];
	const packageJson = read(dir, "package.json");
	const lockfile = read(dir, "package-lock.json");
	const fromLock = usable(lockfile);
	const fromPackageJson = usable(packageJson);
	const javascript = fromLock ? {
		file: "package-lock.json",
		stack: fromLock
	} : fromPackageJson ? {
		file: "package.json",
		stack: fromPackageJson
	} : null;
	if (javascript) {
		const node = javascript.stack.runtime.node ?? fromPackageJson?.runtime.node ?? versionFrom(dir, "node", [".nvmrc", ".node-version"]);
		if (node) javascript.stack.runtime = {
			...javascript.stack.runtime,
			node
		};
		stacks.push(javascript);
	}
	const python = usable(read(dir, "requirements.txt"));
	if (python) {
		const version = versionFrom(dir, "python", [".python-version", "runtime.txt"]);
		if (version) python.runtime = {
			...python.runtime,
			python: version
		};
		stacks.push({
			file: "requirements.txt",
			stack: python
		});
	}
	return {
		name: nameOf(packageJson) ?? nameOf(lockfile) ?? basename(dir),
		stacks
	};
}
function nameOf(json) {
	try {
		const name = json ? JSON.parse(json).name : null;
		return typeof name === "string" && name.trim() ? name.trim() : null;
	} catch {
		return null;
	}
}
// src/lib/words.ts
var NUMBERS = [
	"Zero",
	"One",
	"Two",
	"Three",
	"Four",
	"Five",
	"Six",
	"Seven",
	"Eight",
	"Nine",
	"Ten"
];
var count = (n) => n <= 10 ? NUMBERS[n] : String(n);
var things = (n) => `${count(n)} ${n === 1 ? "thing" : "things"}`;
function verdict({ now, soon, later }, missed = [], where = "what you pasted") {
	if (now > 0) {
		const rest = soon + later;
		const unfinished = "The check could not finish, so there may be more.";
		const waiting = rest ? `${count(rest)} more can wait.` : "";
		return {
			tone: "now",
			line: `${things(now)} ${now === 1 ? "needs" : "need"} you this week.`,
			sub: missed.length ? [waiting, unfinished].filter(Boolean).join(" ") : waiting || "Everything else is fine."
		};
	}
	if (missed.length) {
		const found = soon + later;
		return {
			tone: "unsure",
			line: "The check could not finish.",
			sub: found ? `${things(found)} turned up in the parts that worked.` : "Nothing turned up in the parts that worked."
		};
	}
	if (soon > 0) return {
		tone: "calm",
		line: "Nothing is urgent this week.",
		sub: `${things(soon)} ${soon === 1 ? "is" : "are"} worth planning this month.`
	};
	if (later > 0) return {
		tone: "calm",
		line: "Nothing is urgent this week.",
		sub: `${things(later)} can wait until you have time.`
	};
	return {
		tone: "clear",
		line: "Nothing needs you this week.",
		sub: `We found no known security holes, retiring AI models or expired runtimes in ${where}.`
	};
}
function missedNote(missed) {
	if (!missed.length) return "";
	const one = missed.length === 1;
	return `The ${joinWords(missed)} ${one ? "lookup" : "lookups"} could not be reached, so ${one ? "that part is" : "those parts are"} missing. Try again in a minute.`;
}
function unlistedNote(ids) {
	if (!ids.length) return "";
	const one = ids.length === 1;
	return `${joinWords(ids)} ${one ? "is" : "are"} on none of the retirement lists we track. That is not a guarantee ${one ? "it" : "they"} will stay.`;
}
var NAMED_SKIPS = 4;
function skippedNote(skipped) {
	if (!skipped.length) return "";
	if (skipped.length <= NAMED_SKIPS) return `Left out of the check: ${joinWords(skipped.map((entry) => `${entry.name} (${entry.reason})`))}.`;
	const names = skipped.slice(0, NAMED_SKIPS).map((entry) => entry.name).join(", ");
	const sameReason = skipped.every((entry) => entry.reason === skipped[0].reason);
	return `Left out of the check: ${names} and ${skipped.length - NAMED_SKIPS} more${sameReason ? ` (${skipped[0].reason})` : ""}.`;
}
function joinWords(words) {
	if (words.length <= 1) return words.join("");
	return `${words.slice(0, -1).join(", ")} and ${words[words.length - 1]}`;
}
// src/cli/report.ts
var GROUPS = [
	["now", "This week"],
	["soon", "This month"],
	["later", "Can wait"]
];
var SITE = "https://tend.sreeships.com";
var WIDTH = 96;
var exitCode = ({ summary, missed }) => summary.now > 0 ? 1 : missed.length ? 2 : 0;
function asText(report) {
	const { project, result } = report;
	const said = verdict(result.summary, result.missed, "this project");
	const lines = [
		`Tend checked ${project}`,
		"",
		`${said.line} ${said.sub}`
	];
	let number = 0;
	for (const [urgency, label] of GROUPS) {
		const group = result.findings.filter((finding) => finding.urgency === urgency);
		if (!group.length) continue;
		lines.push("", label);
		for (const finding of group) lines.push(...item(finding, number += 1));
	}
	lines.push("", ...report.checked.map(checkedLine));
	if (report.models.length) lines.push(`Checked ${report.models.length} AI ${report.models.length === 1 ? "model" : "models"}: ${report.models.join(", ")}.`);
	if (report.tableChecked) lines.push(`AI model dates as read on ${formatDate(report.tableChecked)}${report.tableIsBuiltIn ? " (built-in copy; the newer list could not be fetched)" : ""}.`);
	for (const note of [
		missedNote(result.missed),
		unlistedNote(result.unlistedModels),
		skippedNote(result.skipped)
	]) if (note) lines.push(note);
	lines.push("", "If you are a coding agent: tell your user the verdict and the This week items as they are. Fix only what they ask you to.", `To get this every Monday without running anything: ${SITE}`);
	return lines.join("\n");
}
function item(finding, number) {
	const lead = `  ${number}. `;
	const indent = " ".repeat(lead.length);
	const lines = [
		`${lead}${finding.title}`,
		...wrap(finding.body, indent),
		...wrap(`To fix: ${finding.prompt}`, indent)
	];
	for (const link of finding.links.slice(0, 3)) lines.push(`${indent}${link.url}`);
	return lines;
}
function wrap(text, indent) {
	const lines = [];
	let line = "";
	for (const word of text.split(/\s+/)) if (line && indent.length + line.length + 1 + word.length > WIDTH) {
		lines.push(indent + line);
		line = word;
	} else line = line ? `${line} ${word}` : word;
	if (line) lines.push(indent + line);
	return lines;
}
function checkedLine({ file, packages, exact, runtime }) {
	const count = `${packages} ${packages === 1 ? "package" : "packages"}`;
	const also = runtime ? " and the runtime" : "";
	if (exact) return `Checked ${count} at ${packages === 1 ? "its exact version" : "their exact versions"}${also}, from ${file}.`;
	return `Checked ${count}${also}, from ${file}. The versions there are ranges, so this part is approximate. A lockfile makes it exact.`;
}
function asJson(report) {
	const { project, result } = report;
	return JSON.stringify({
		tend: 1,
		project,
		verdict: verdict(result.summary, result.missed, "this project"),
		summary: result.summary,
		findings: result.findings,
		files: report.checked.map((entry) => entry.file),
		models: report.models,
		unlistedModels: result.unlistedModels,
		missed: result.missed,
		skipped: result.skipped,
		modelTableChecked: report.tableChecked,
		modelTableIsBuiltIn: report.tableIsBuiltIn,
		exitCode: exitCode(result)
	}, null, 2);
}
// src/cli/scan.ts
var SKIPPED_FOLDERS = /* @__PURE__ */ new Set([
	"node_modules",
	".git",
	"dist",
	"build",
	"out",
	".next",
	".nuxt",
	".svelte-kit",
	".venv",
	"venv",
	"env",
	"__pycache__",
	"coverage",
	"vendor",
	".cache",
	".turbo",
	"target",
	".idea",
	".vscode"
]);
var SKIPPED_FILES = /* @__PURE__ */ new Set([
	"package-lock.json",
	"yarn.lock",
	"pnpm-lock.yaml",
	"poetry.lock",
	"uv.lock"
]);
var READABLE = /\.(js|jsx|mjs|cjs|ts|tsx|py|rb|go|php|java|kt|swift|rs|cs|json|ya?ml|toml|ini|cfg|conf|sh|env)$|^\.env/i;
var MAX_FILE_BYTES = 4e5;
var MAX_FILES = 4e3;
var MAX_DEPTH = 8;
var TOKEN = /[a-z0-9][a-z0-9.-]*/gi;
function spellings(token) {
	const out = [token];
	const bedrock = /^(?:[a-z]{2}\.)?(?:anthropic|meta|amazon|cohere|mistral|ai21|deepseek|openai)\.(.+?)(?:-v\d+)?$/.exec(token);
	if (bedrock) out.push(bedrock[1]);
	return out;
}
function findModels(directory, knownIds) {
	const known = new Map(knownIds.map((id) => [id.toLowerCase(), id]));
	const found = /* @__PURE__ */ new Set();
	let filesRead = 0;
	const walk = (dir, depth) => {
		let entries;
		try {
			entries = readdirSync(dir);
		} catch {
			return;
		}
		for (const entry of entries) {
			if (filesRead >= MAX_FILES) return;
			const path = join(dir, entry);
			let info;
			try {
				info = statSync(path);
			} catch {
				continue;
			}
			if (info.isDirectory()) {
				if (!SKIPPED_FOLDERS.has(entry) && depth < MAX_DEPTH) walk(path, depth + 1);
				continue;
			}
			if (!info.isFile() || info.size > MAX_FILE_BYTES || SKIPPED_FILES.has(entry) || !READABLE.test(entry)) continue;
			filesRead += 1;
			let text;
			try {
				text = readFileSync(path, "utf8");
			} catch {
				continue;
			}
			for (const token of text.match(TOKEN) ?? []) for (const candidate of spellings(token.replace(/[.-]+$/, "").toLowerCase())) {
				const id = known.get(candidate);
				if (id) found.add(id);
			}
		}
	};
	walk(directory, 0);
	return [...found].sort();
}
// src/cli/run.ts
var TABLE_URL = "https://tend.sreeships.com/models.json";
var TABLE_WAIT_MS = 8e3;
var ORDER = {
	now: 0,
	soon: 1,
	later: 2
};
var HELP = `tend-check ${package_default.version}
Tells you what an app needs this week: security holes to patch, AI models about
to be switched off, and versions that no longer get fixes.

  npx -y github:sree-data/tend [folder] [--models id,id] [--json]

It reads package-lock.json, package.json or requirements.txt in the folder (this
one if none is named) and looks through the code for the AI models it names.
It sends package names and versions to public registries, and nothing else.
It changes no files.

  --models id,id   AI models to check as well, if the code does not name them
  --json           print one JSON object instead of sentences
  --version        print the version
  --help           print this

Exit code: 0 nothing needs you this week, 1 something does, 2 the check could not finish.
The page for people: https://tend.sreeships.com`;
function readOptions(argv) {
	const options = {
		folder: ".",
		models: [],
		json: false,
		help: false,
		version: false,
		unknown: null
	};
	for (let at = 0; at < argv.length; at += 1) {
		const arg = argv[at];
		if (arg === "--json") options.json = true;
		else if (arg === "--help" || arg === "-h") options.help = true;
		else if (arg === "--version" || arg === "-v") options.version = true;
		else if (arg === "--models") options.models.push(...list(argv[at += 1]));
		else if (arg.startsWith("--models=")) options.models.push(...list(arg.slice(9)));
		else if (arg.startsWith("-")) options.unknown = arg;
		else options.folder = arg;
	}
	return options;
}
var list = (text) => String(text ?? "").split(",").map((id) => id.trim()).filter(Boolean);
async function run({ argv, cwd, fetchJson, today = todayIso(), bundledTable = model_retirements_default }) {
	const options = readOptions(argv);
	if (options.help) return {
		code: 0,
		out: HELP
	};
	if (options.version) return {
		code: 0,
		out: package_default.version
	};
	if (options.unknown) return {
		code: 2,
		out: `Unknown option ${options.unknown}.\n\n${HELP}`
	};
	const folder = resolve(cwd, options.folder);
	if (!existsSync(folder) || !statSync(folder).isDirectory()) return {
		code: 2,
		out: `There is no folder at ${folder}.`
	};
	const [project, table] = [readProject(folder), await freshTable(fetchJson, bundledTable)];
	const named = findModels(folder, table.models.models.map((model) => model.id));
	const models = [.../* @__PURE__ */ new Set([...named, ...options.models])];
	if (!project.stacks.some((entry) => entry.stack.packages.length > 0 || Object.keys(entry.stack.runtime).length > 0) && !models.length) return {
		code: 2,
		out: `Tend found nothing to check in ${folder}.\nNo package-lock.json, package.json or requirements.txt there lists anything to check, and the code names no AI model on the retirement lists.\nRun it in the folder that holds one of those files, or name the folder: npx -y github:sree-data/tend path/to/app`
	};
	const stacks = project.stacks.length ? project.stacks.map((entry) => entry.stack) : [{
		source: "empty",
		packages: [],
		skipped: [],
		runtime: {},
		models: []
	}];
	const results = await Promise.all(stacks.map((stack, at) => runCheck({
		stack,
		extraModels: at === 0 ? models : [],
		today,
		fetchJson,
		modelTable: table.models
	})));
	const result = merge(results);
	const checked = project.stacks.map((entry, at) => ({
		file: entry.file,
		packages: results[at].checked.packages,
		exact: results[at].checked.exact,
		runtime: results[at].checked.runtimes > 0
	}));
	const report = {
		project: project.name,
		result,
		checked,
		models,
		tableChecked: table.models.checked ?? null,
		tableIsBuiltIn: table.builtIn
	};
	return {
		code: exitCode(result),
		out: options.json ? asJson(report) : asText(report)
	};
}
async function freshTable(fetchJson, bundled) {
	let timer;
	try {
		const waited = new Promise((_, reject) => {
			timer = setTimeout(() => reject(/* @__PURE__ */ new Error("slow")), TABLE_WAIT_MS);
		});
		const table = await Promise.race([fetchJson(TABLE_URL), waited]);
		if (Array.isArray(table?.models) && table.models.length > 0 && table.models.every((model) => typeof model?.id === "string" && model.id && /^\d{4}-\d{2}-\d{2}$/.test(String(model?.retires)))) return {
			models: table,
			builtIn: false
		};
	} catch {} finally {
		clearTimeout(timer);
	}
	return {
		models: bundled,
		builtIn: true
	};
}
function merge(results) {
	const findings = results.flatMap((result) => result.findings);
	findings.sort((a, b) => ORDER[a.urgency] - ORDER[b.urgency]);
	const summary = {
		now: 0,
		soon: 0,
		later: 0
	};
	for (const finding of findings) summary[finding.urgency] += 1;
	return {
		findings,
		summary,
		checked: {
			packages: results.reduce((sum, result) => sum + result.checked.packages, 0),
			exact: results.every((result) => result.checked.exact),
			models: results.reduce((sum, result) => sum + result.checked.models, 0),
			runtimes: results.reduce((sum, result) => sum + result.checked.runtimes, 0)
		},
		skipped: results.flatMap((result) => result.skipped),
		unlistedModels: [...new Set(results.flatMap((result) => result.unlistedModels))],
		missed: [...new Set(results.flatMap((result) => result.missed))]
	};
}
// src/cli/main.ts
var { code, out } = await run({
	argv: process.argv.slice(2),
	cwd: process.cwd(),
	fetchJson
});
process.stdout.write(out.endsWith("\n") ? out : `${out}\n`);
process.exitCode = code;
export {};
