import { it, expect, describe, beforeEach, vi } from "vitest";
import { playAudio } from "./script.js";

describe("playAudio()", () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div data-key="65" class="key">A</div>
    <audio data-key="65"></audio>
    `;
    const audio = document.querySelector("audio");
  });

  it("should do nothing if no matching elements are found", () => {
    const mockEvent = { key: "Z" }; // 90, no matching div/audio
    const resultFn = () => playAudio.call(window, mockEvent);
    expect(resultFn).not.toThrow();
  });

  it("should play the audio and add playing class to the classList", () => {
    const mockEvent = { key: "A" }; // 65

    const audio = document.querySelector("audio");
    audio.play = vi.fn();
    const div = document.querySelector("div");

    playAudio.call(window, mockEvent);

    expect(audio.play).toBeCalledTimes(1);
    expect(div.classList.contains("playing")).toBe(true);
    expect(audio.currentTime).toBe(0);
  });
});
