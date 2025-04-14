-- SQLite

BEGIN;

DELETE FROM "country";

INSERT INTO "country" (code, name, emoji) VALUES
("FR", "France", "🇫🇷"),
("DE", "Allemagne", "🇩🇪"),
("IT", "Italie", "🇮🇹"),
("ES", "Espagne", "🇪🇸"),
("GB", "Royaume-Uni", "🇬🇧"),
("US", "États-Unis", "🇺🇸"),
("CA", "Canada", "🇨🇦"),
("BE", "Belgique", "🇧🇪"),
("CH", "Suisse", "🇨🇭"),
("NL", "Pays-Bas", "🇳🇱"),
("PT", "Portugal", "🇵🇹"),
("AT", "Autriche", "🇦🇹"),
("IE", "Irlande", "🇮🇪"),
("NO", "Norvège", "🇳🇴"),
("SE", "Suède", "🇸🇪"),
("FI", "Finlande", "🇫🇮"),
("DK", "Danemark", "🇩🇰"),
("PL", "Pologne", "🇵🇱"),
("CZ", "République tchèque", "🇨🇿"),
("HU", "Hongrie", "🇭🇺");

COMMIT;