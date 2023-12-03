DROP TABLE IF EXISTS japan;
DROP TABLE IF EXISTS users;


CREATE TABLE japan (
    id  INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(500) NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    web_url VARCHAR(500) NOT NULL
);

INSERT INTO japan (name, description, image_url, web_url)
VALUES
('Mount Fuji', 'Mount Fuji is an active stratovolcano located on the Japanese island of Honshū, with a summit elevation of 3,776.24 m 12,389 ft 3 in. It is the tallest mountain in Japan', 'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://en.wikipedia.org/wiki/Mount_Fuji'),
('Kyoto', 'Kyoto  officially Kyoto City is the capital city of Kyoto Prefecture in Japan. Located in the Kansai region on Japans largest and most populous island of Honshu', 'https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?q=80&w=1442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://en.wikipedia.org/wiki/Kyoto'),
('Tori Gate', 'A torii is a traditional Japanese gate most commonly found at the entrance of or within a Shinto shrine, where it symbolically marks the transition from the mundane to the sacred and a spot where kami are welcomed and thought to travel through.', 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=1353&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://en.wikipedia.org/wiki/Torii'),
('Ginza', 'The Ginza is Tokyos most famous upmarket shopping, dining and entertainment district, featuring numerous department stores, boutiques, art galleries, restaurants, night clubs and cafes.', 'https://plus.unsplash.com/premium_photo-1661902398022-762e88ff3f82?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://www.japan-guide.com/e/e3005.html'),
('Happo Ike Pond', 'Nestled among the Northern Japanese Alps at an altitude of 2,060m, Happo Pond is one of those majestic natural sights that is picture perfect in any season. And hiking to it in the warmer months makes for a great day out.', 'https://images.unsplash.com/photo-1614212416831-bb2b3acedde9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://unborderedlife.com/hiking-to-happo-pond-in-hakuba-a-breathtaking-experience/'),
('Itsukushima Shrine', 'Itsukushima Shrine, Itsukushima-jinja is a Shinto shrine on the island of Itsukushima popularly known as Miyajima, best known for its floating" torii gate. It is in the city of Hatsukaichi in Hiroshima Prefecture in Japan', 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://en.wikipedia.org/wiki/Itsukushima_Shrine'),
('Lake Ashinoko', 'Lake Ashi also referred to as Hakone Lake or Ashinoko Lake, is a scenic lake in the Hakone area of Kanagawa Prefecture in Honshū Japan. It is a crater lake that lies along the southwest wall of the caldera of Mount Hakone', 'https://images.unsplash.com/photo-1583901580846-5045902c1033?q=80&w=1407&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://en.wikipedia.org/wiki/Lake_Ashi'),
('Fujiyoshida', 'Fujiyoshida is a city located in Yamanashi Prefecture, Japan. As of 1 May 2019, the city had an estimated population of 48,782 in 19,806 households and a population density of 400 persons per km2', 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://en.wikipedia.org/wiki/Fujiyoshida'),
('Osaka Castle', 'Osaka Castle is a Japanese castle in Chūō-ku Osaka Japan. The castle is one of Japans most famous landmarks and it played a major role in the unification of Japan during the sixteenth century of the Azuchi-Momoyama period.', 'https://images.unsplash.com/photo-1525316166484-aeef34af3ec3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://en.wikipedia.org/wiki/Osaka_Castle');

CREATE TABLE users (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(500) NOT NULL,
    email VARCHAR(500) UNIQUE NOT NULL,
    password VARCHAR(500) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE token (
    token_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    token CHAR(36) UNIQUE NOT NULL,
    PRIMARY KEY (token_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);