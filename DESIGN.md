---
version: alpha
colors:
  void: "#090B0D"
  graphite: "#12161A"
  paper: "#E9E5DA"
  muted: "#9B9B92"
  copper: "#C47B52"
  signal: "#8DD5D2"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
  utility:
    fontFamily: "IBM Plex Mono, Consolas, monospace"
rounded:
  panel: "2px"
  control: "999px"
spacing:
  section: "clamp(7rem, 14vw, 13rem)"
  gutter: "clamp(1.25rem, 4vw, 4rem)"
components:
  dossier:
    surface: "graphite"
    border: "paper at 14% opacity"
  focus:
    color: "signal"
    width: "2px"
---

# Spatial dossier design system

## Overview

The portfolio is a dark orbital personnel dossier for recruiters and engineering collaborators. Its signature is a single persistent identity apparatus: a copper core, measuring rings, and document planes that reorganize as the reader moves through the resume. The HTML content remains the primary information surface; WebGL supplies atmosphere and continuity.

## Colors

Void and graphite own the environment. Paper is the primary reading color, muted is metadata, copper marks identity and selected states, and signal cyan is reserved for system status and keyboard focus. Avoid rainbow technology branding and broad neon gradients.

## Typography

Fraunces appears only in names and major section titles. Manrope carries all long-form content. IBM Plex Mono labels records, dates, section coordinates, and interface status. No more than these three roles appear on one screen.

## Layout

Desktop content alternates between a narrow editorial column and wider dossier walls while the canvas remains fixed behind it. Mobile uses one reading column with the same 3D scene reframed behind the text. Sections use generous vertical distance to make camera transitions legible without scroll hijacking.

## Elevation & Depth

Depth comes from WebGL lighting, layered hairlines, and tonal separation—not large drop shadows or ubiquitous glass cards. HTML panels use near-opaque graphite for reliable contrast over the scene.

## Shapes

Documents and project panels are rectilinear with 2px corners. Pills are reserved for skills, status, and compact controls. The orbital apparatus supplies the only repeated circles.

## Components

Dossiers use a metadata rail, a restrained border, and a paper-like reading field. Navigation is always available, keyboard-visible, and never depends on the canvas. Project details open in an accessible modal dossier with focus restoration.

## Do's and Don'ts

Do use real resume language, technical diagrams, restrained particles, and purposeful camera changes. Do not introduce game controls, fake metrics, excessive bloom, generic glassmorphism, or decorative objects unrelated to the portfolio content.
