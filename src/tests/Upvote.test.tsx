import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import UpvoteList from "../components/UpvoteList";
import { UpvoteProvider } from "../context/UpvoteContext";

jest.mock("../assets/icons/arrow-default.svg", () => "arrow-default.svg");
jest.mock("../assets/icons/arrow-selected.svg", () => "arrow-selected.svg");

test("change selection state when clicking on Upvote button", () => {
  const initialState = [[false]];

  render(
    <UpvoteProvider initialState={initialState}>
      <UpvoteList listIndex={0} />
    </UpvoteProvider>
  );

  const button = screen.getAllByRole("button")[0];
  expect(button).toBeInTheDocument();

  const images = screen.getAllByRole("img", { name: /upvote/i });
  expect(images.length).toBeGreaterThan(0);

  fireEvent.click(button);

  const img = screen.getAllByRole("img", { name: /upvote/i })[0];
  expect(img).toHaveAttribute("src", expect.stringContaining("arrow-selected.svg"));
  
});
