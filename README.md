# fastapi-vite-template

[![CI](https://github.com/joernpreuss/fastapi-vite-template/actions/workflows/ci.yml/badge.svg)](https://github.com/joernpreuss/fastapi-vite-template/actions/workflows/ci.yml)

A minimal, production-minded full-stack template: **FastAPI** backend, **Vite + TypeScript** frontend, CI/CD via GitHub Actions, test-driven development, and a one-command start on macOS, Linux, and Windows.

## What's inside

- **Backend:** FastAPI, managed with [uv](https://docs.astral.sh/uv/), linted with ruff, type-checked with mypy, tested with pytest.
- **Frontend:** Vite + TypeScript (no framework), tested with Vitest.
- **CI/CD:** GitHub Actions — lint, type-check, test, and build on every push.
- **Workflow:** trunk-based with feature branches and pull requests; tests first.

## Example app: 3D rotatable map (MapLibre + OSM)

The template ships with a small example app: a 3D map of Cologne with extruded buildings, rendered with [MapLibre GL JS](https://maplibre.org/) on [OpenFreeMap](https://openfreemap.org/) vector tiles (no API key required). Drag to pan, right-drag or Ctrl-drag to rotate and tilt.

Map data © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors (ODbL). Tiles by [OpenFreeMap](https://openfreemap.org/).

## Getting started

*Setup instructions follow as the template grows — the goal is a single command per platform.*

## License

[MIT](LICENSE)
