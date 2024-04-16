import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";

export const metadata = {
  title: "Handy & Dandy - Expert Handyman in Williamsburg Brooklyn NYC Queens - Appliance Installation, Drywall Repairs, Interior Painting & Furnitures",
  description: "Top-rated handyman services in New York City - A caring and affordable handyman service for your home and business. Drywall repairs, appliance installation, tv mounting, interior painting, picture & art installation, tiling, furniture, maintenance, assembly, shelving. Specializing in appliance installation, drywall repair, and more in Williamsburg, Brooklyn, and Queens.",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/logo.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
