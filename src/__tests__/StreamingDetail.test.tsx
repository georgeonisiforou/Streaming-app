import { render, screen } from "@testing-library/react";
import StreamingDetail from "@/components/StreamingDetail";
import { StreamingItemT } from "@/app/types";
import React from "react";

jest.mock("@/app/context/PlayerContext", () => ({
  usePlayer: jest.fn(() => ({
    playbackState: "paused",
    setPlaybackState: jest.fn(),
    setProgress: jest.fn(),
    progress: {},
  })),
}));

jest.mock("react-player", () => () => <div>Mocked ReactPlayer</div>);

const mockItem: StreamingItemT = {
  id: "1",
  title: "Test Movie",
  description: "Test description for the movie.",
  thumbnailUrl: "/images/thumbnails/thumbnail1.jpg",
  videoUrl: "/videos/movie1.mp4",
  duration: "1:45:30",
  releaseYear: 2023,
  genre: ["Action", "Adventure"],
  rating: 4.5,
};

describe("StreamingDetail", () => {
  it("renders movie details correctly", () => {
    render(<StreamingDetail selectedItem={mockItem} />);

    expect(screen.getByText("Test Movie")).toBeInTheDocument();

    expect(
      screen.getByText("Test description for the movie.")
    ).toBeInTheDocument();

    expect(screen.getByText("4.5")).toBeInTheDocument();

    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("Adventure")).toBeInTheDocument();

    expect(screen.getByText("Duration: 1:45:30")).toBeInTheDocument();

    expect(screen.getByText("Realeased on: 2023")).toBeInTheDocument();

    expect(screen.getByText("Mocked ReactPlayer")).toBeInTheDocument();
  });

  it("correctly initializes progress state", () => {
    render(<StreamingDetail selectedItem={mockItem} />);

    expect(screen.getByText("Mocked ReactPlayer")).toBeInTheDocument();
  });
});
