import React from "react"
import {screen, render} from "@testing-library/react"

import {GenEric} from "./gen-eric";

describe("GenEric", () => {
    it("should render the component", () => {
        render(<GenEric contentLanguage="en_US" message="World"/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
