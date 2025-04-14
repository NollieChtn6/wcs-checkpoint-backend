-- SQLite

BEGIN;

DELETE FROM "continent";
DELETE FROM "country";

INSERT INTO "continent" (code, name) VALUES
("AF", "Afrique"),
("AS", "Asie"),
("EU", "Europe"),
("NA", "Amérique du Nord"),
("SA", "Amérique du Sud"),
("OC", "Océanie"),
("AN", "Antarctique");

INSERT INTO "country" (code, name, emoji, continent) VALUES
("FR", "France", "🇫🇷", 3), 
("DE", "Allemagne", "🇩🇪", 3),   
("IT", "Italie", "🇮🇹", 3),
("ES", "Espagne", "🇪🇸", 3), 
("GB", "Royaume-Uni", "🇬🇧", 3), 
("US", "États-Unis", "🇺🇸", 4),
("CA", "Canada", "🇨🇦", 4), 
("BE", "Belgique", "🇧🇪", 3),
("CH", "Suisse", "🇨🇭", 3),
("NL", "Pays-Bas", "🇳🇱", 3),
("PT", "Portugal", "🇵🇹", 3),
("AT", "Autriche", "🇦🇹", 3),
("IE", "Irlande", "🇮🇪", 3), 
("NO", "Norvège", "🇳🇴", 3),
("SE", "Suède", "🇸🇪", 3),
("FI", "Finlande", "🇫🇮", 3), 
("DK", "Danemark", "🇩🇰", 3), 
("PL", "Pologne", "🇵🇱", 3),  
("CZ", "République tchèque", "🇨🇿", 3),
("CA", "Canada", "🇨🇦", 4), 
("MX", "Mexique", "🇲🇽", 4),
("BR", "Brésil", "🇧🇷", 5),
("AR", "Argentine", "🇦🇷", 5),
("CL", "Chili", "🇨🇱", 5),
("CO", "Colombie", "🇨🇴", 5),
("PE", "Pérou", "🇵🇪", 5),
("AU", "Australie", "🇦🇺", 6),
("NZ", "Nouvelle-Zélande", "🇳🇿", 6),
("JP", "Japon", "🇯🇵", 2),
("CN", "Chine", "🇨🇳", 2),
("IN", "Inde", "🇮🇳", 2),
("KR", "Corée du Sud", "🇰🇷", 2),
("ZA", "Afrique du Sud", "🇿🇦", 1);

COMMIT;