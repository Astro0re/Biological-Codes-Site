# Biological Codes

Biological Codes is a Django website for organizing and presenting code projects that model biological processes. Its project catalog is grouped into cellular, genetic, and gross anatomy topics.

## Current catalog

- **Cellular** (`/cell/`): cellular division and pathway project cards.
- **Genetic** (`/genetic/`): DNA sequencing, phylogenetic trees, protein folding, Punnett squares, and sequence alignment cards.
- **Gross anatomy** (`/gross/`): a skeletal database project card.

These cards are currently placeholders: their “View Code” links are empty and some descriptions have not been filled in. The home page is at `/`; `/ore/` is a simple placeholder response. The site currently renders pages and client-side catalog cards; it does not yet run these listed simulations.

## Requirements

- Python 3.10 or later
- Django 5.2.4

## Run locally

From the repository root, create and activate a virtual environment, install Django, then start the development server:

```bash
python -m venv .venv
# Windows PowerShell
.venv\Scripts\Activate.ps1
# macOS or Linux: source .venv/bin/activate
python -m pip install "Django==5.2.4"
python bio_codes/manage.py migrate
python bio_codes/manage.py runserver
```

Open <http://127.0.0.1:8000/>. Django uses the SQLite database configured in `bio_codes/bio_codes/settings.py`; migrations prepare the local database. You can also open the Django admin at `/admin/` after creating a local administrator with `python bio_codes/manage.py createsuperuser`.

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
