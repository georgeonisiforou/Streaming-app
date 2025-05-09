import { render, screen, fireEvent } from "@testing-library/react";
import StreamingItem from "@/components/StreamingItem";
import { useRouter } from "next/navigation";
import { usePlayer } from "@/app/context/PlayerContext";
import "@testing-library/jest-dom";
import React from "react";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));
jest.mock("@/app/context/PlayerContext", () => ({
  usePlayer: jest.fn(),
}));

describe("StreamingItem", () => {
  const mockPush = jest.fn();
  const mockSetSelectedContent = jest.fn();
  const mockSetPlaybackState = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (usePlayer as jest.Mock).mockReturnValue({
      setSelectedContent: mockSetSelectedContent,
      setPlaybackState: mockSetPlaybackState,
    });
  });

  const mockItem = {
    id: "1",
    thumbnail: "/images/thumb.jpg",
    title: "Test Movie",
    description: "Test Description",
    item: {
      id: "1",
      title: "Test Movie",
      description: "Test Description",
      thumbnailUrl: "/images/thumb.jpg",
      videoUrl: "/videos/movie1.mp4",
      duration: "1:45:30",
      releaseYear: 2023,
      genre: ["Action", "Adventure"],
      rating: 7.8,
    },
  };

  it("renders movie details correctly", () => {
    render(<StreamingItem {...mockItem} />);

    expect(screen.getByText("Test Movie")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("triggers player state and routing on click", () => {
    render(<StreamingItem {...mockItem} />);
    fireEvent.click(screen.getByRole("img"));

    expect(mockSetSelectedContent).toHaveBeenCalledWith(mockItem.item);
    expect(mockSetPlaybackState).toHaveBeenCalledWith("playing");
    expect(mockPush).toHaveBeenCalledWith("/streaming/1");
  });
});
