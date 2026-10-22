# Biological Codes

Biological Codes is a Django website for organizing and presenting code projects that model biological processes. Its project catalog is grouped into cellular, genetic, and gross anatomy topics.

## Current catalog

- **Cellular** (`/cell/`): a cellular division project card.
- **Genetic** (`/genetic/`): DNA sequence generation, phylogenetic distance calculation, Punnett square combinations, and sequence alignment cards.
- **Gross anatomy** (`/gross/`): a skeletal database project card.

The cellular division and skeletal database cards do not yet have code links. Genetic project links point to files in the separate Bio-Codes GitHub repository. This Django site displays the catalog; it does not run the listed programs. The home page is at `/`; `/ore/` is a placeholder response.

## Requirements

- Python 3.13 (also recorded in `.python-version`)
- Packages listed in `bio_codes/requirements.txt`

## Run locally

From the repository root, create and activate a virtual environment, install the project requirements, then start the development server:

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install -r bio_codes/requirements.txt
$env:DEBUG = "True"
python bio_codes/manage.py runserver
```

On macOS or Linux, activate with `source .venv/bin/activate` and start the app with `DEBUG=True python bio_codes/manage.py runserver`. Open <http://127.0.0.1:8000/>. The current site does not store visitor data and does not need a hosted database.

## Deploy to Render

1. Push the project to GitHub and connect that repository to Render.
2. Create a **Web Service** using the `master` branch and set **Root Directory** to `bio_codes`.
3. Set the **Build Command** to `pip install -r requirements.txt && python manage.py collectstatic --no-input`.
4. Set the **Start Command** to `gunicorn bio_codes.wsgi:application`.
5. Add `SECRET_KEY` as a generated secret and set `DEBUG` to `False`. Render supplies `RENDER_EXTERNAL_HOSTNAME`, which the settings use for `ALLOWED_HOSTS`.
6. Deploy, then check the home page and `/cell/`, `/genetic/`, and `/gross/` routes.

No PostgreSQL service, `DATABASE_URL`, migrations, or external API credentials are required for the current site. A custom domain is optional; configure it in Render and at your domain provider if you use one.

## Repository layout

```text
bio_codes/
├── manage.py                 # Django management entry point
├── bio_codes/                # Project settings and root URL configuration
└── code_display/             # Pages, templates, static assets, and tests
    ├── templates/            # Home and topic pages
    └── static/               # CSS and JavaScript catalog cards
```

The topic pages are routed in `bio_codes/code_display/urls.py`. Their HTML templates live under `bio_codes/code_display/templates/`, and the card data is currently kept in the corresponding JavaScript files under `bio_codes/code_display/static/`.

## Contributing

Suggestions, page improvements, documentation updates, and new biology code projects are welcome. Read [CONTRIBUTIONS.md](CONTRIBUTIONS.md) before submitting a change. Please include a clear description, relevant sources and attribution, required dependencies, and steps to run or verify any contributed code.

## License

No license file is currently provided. Do not assume that the repository or contributed code is licensed for redistribution or commercial use; contributors should identify the license and permissions that apply to their work.
