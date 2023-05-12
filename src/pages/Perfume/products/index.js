const products = [
    {
        id: 'LP0212',
        name: 'Spell on You',
        price: '$300.00',
        detail: 'The Félicie Pochette is made from Damier Azur canvas overlaid with a bold graphic print inspired by the world of travel so dear to Louis Vuitton. The summery motif, a nautical pattern made of ropes and chains, in fresh feminine colors with golden highlights, brings a playful yet chic feel to this practical pouch.',
        intro: 'Passionate love is the most exciting of all games. Oscillating between sensuality and complicity, that delicious tension inspired Master Perfumer Jacques Cavallier Belletrud to create a romantic, mischievous fragrance that becomes one with the skin. An ode to the iris pallida from Florence, its composition exalts the duality of a precious flower that symbolizes feminine seduction. The iris insinuates its violet notes into a radiant bouquet of rose and Sambac jasmine, then unfurls the force of its powdery notes within the honeyed accents of acacia flower. Evolving from carnal seduction and an intimate impression, Spell on You has a hypnotic, heady aura, like an unforgettable refrain...',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-spell-on-you--LP0212_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-spell-on-you-collections--LP0212_PM1_Ambiance%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0216',
        name: 'Travel Spray Spell on You',
        price: '$295.00',
        detail: 'Travel Spray refills. Refills to be used exclusively with the Louis Vuitton Travel Spray.',
        intro: 'Passionate love is the most exciting of all games. Oscillating between sensuality and complicity, that delicious tension inspired Master Perfumer Jacques Cavallier Belletrud to create a romantic, mischievous fragrance that becomes one with the skin. An ode to the iris pallida from Florence, its composition exalts the duality of a precious flower that symbolizes feminine seduction. The iris insinuates its violet notes into a radiant bouquet of rose and Sambac jasmine, then unfurls the force of its powdery notes within the honeyed accents of acacia flower. Evolving from carnal seduction and an intimate impression, Spell on You has a hypnotic, heady aura, like an unforgettable refrain...',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-travel-spray-spell-on-you--LP0216_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-travel-spray-spell-on-you-collections--LP0216_PM2_Front%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0330',
        name: 'SPELL ON YOU FRAGRANCE AND TRAVEL CASE SET',
        price: '$995.00',
        detail: 'Acacia flower from Egypt',
        intro: 'Love is the most exciting game. Oscillating between sensuality and complicity, that delicious tension inspired Master Perfumer Jacques Cavallier Belletrud to create Spell on You, a romantic, mischievous fragrance that becomes one with the skin. An ode to the iris pallida from Florence, Spell On You exalts that precious flower in a radiant bouquet of rose and Sambac jasmine. Designed to enhance every journey, the Spell On You Fragrance Travel Case Set is composed of Spell On You fragrance (100ml), and a Travel Case fashioned from Epi leather in delicate Rose Ballerine. The case is ideal for transporting and protecting the refillable perfume bottle, and may be personalized with hot-stamped initials. A miniature of Spell On You (10ml) completes this precious set. This refined travel coffret reflects the Maison’s heritage as a layetier-emballeur. Today the Maison upholds that legacy, with finely crafted boxes and cases created to accompany the modern traveler.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-spell-on-you-fragrance-and-travel-case-set--LP0330_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-spell-on-you-fragrance-and-travel-case-set-collections--LP0330_PM1_Other%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0151',
        name: 'Coeur Battant',
        price: '$300.00',
        detail: 'Jasmine from Egypt',
        intro: 'Fresh pear and white flowers waft you away into the whirlwind of life.\nLike a wave of emotion sweeping through you, Cœur Battant is an invitation to listen to your heart and live every moment with passion. The Master Perfumer Jacques Cavallier Belletrud gives body to this instinctive and passionate perfume with a luscious bite of sparkling pear inciting you to enjoy life to the full. Then comes the perfume’s beating heart of sunny Egyptian jasmine and sensual ylang-ylang bringing a sensation of delectable opulence. Highlighting this floral heart, patchouli adds depth to the composition. A perfume with a compelling character, suspended somewhere between freshness and sensuality.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-coeur-battant--LP0151_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-coeur-battant-collections--LP0151_PM1_Detail%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0004',
        name: 'Matière Noire',
        price: '$300.00',
        detail: 'Travel Spray refills. Refills to be used exclusively with the Louis Vuitton Travel Spray.',
        intro: 'Exploring the universe is the ultimate travel fantasy and most thrilling adventure. Matière Noire plumbs intangible depths with a journey through the darkest, most precious woods, namely patchouli and agarwood. The agarwood’s animal notes are intensified by blackcurrant and contrasted with the whiteness of narcissus and jasmine, a floral vibration that cuts the darkness like a comet. Plumes of sacred notes unfurl on the skin. The disruption is total, almost mystical.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-mati%C3%A8re-noire--LP0004_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-mati%C3%A8re-noire-collections--LP0004_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0018',
        name: 'Matière Noire',
        price: '$295.00',
        detail: 'Sambac jasmine',
        intro: 'Exploring the universe is the ultimate travel fantasy and most thrilling adventure. Matière Noire plumbs intangible depths with a journey through the darkest, most precious woods, namely patchouli and agarwood. The agarwood’s animal notes are intensified by blackcurrant and contrasted with the whiteness of narcissus and jasmine, a floral vibration that cuts the darkness like a comet. Plumes of sacred notes unfurl on the skin. The disruption is total, almost mystical.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-mati%C3%A8re-noire--LP0018_PM2_Front%20view.png?wid=656&hei=656',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-mati%C3%A8re-noire-collections--LP0018_PM2_Front%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0083',
        name: 'Attrape-Rêves',
        price: '$300.00',
        detail: 'Litchi accord',
        intro: 'Like the Northern Lights appearing out of nowhere, Attrape-Rêves is the fragrant embodiment of supernatural phenomena forever embedded in the memory of some far-flung exploration. Inspired by such waking dreams, the Master Perfumer Jacques Cavallier Belletrud imagines a trail like a shower of shooting stars, where raw cocoa powder mingles with a bouquet of peonies. Then comes the patchouli heart, enlivened by litchi’s fresh and sparkling notes.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-attrape-r%C3%AAves--LP0083_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-attrape-r%C3%AAves-collections--LP0083_PM1_Interior%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0155',
        name: 'Travel Spray Coeur Battant',
        price: '$295.00',
        detail: 'Pear accord',
        intro: "Like a wave of emotion sweeping through you, Cœur Battant is an invitation to listen to your heart and live every moment with passion. The Master Perfumer Jacques Cavallier Belletrud gives body to this instinctive and passionate perfume with a luscious bite of sparkling pear inciting you to enjoy life to the full. Then comes the perfume's beating heart of sunny Egyptian jasmine and sensual ylang-ylang bringing a sensation of delectable opulence. Highlighting this floral heart, patchouli adds depth to the composition. A perfume with a compelling character, suspended somewhere between freshness and sensuality.",
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-travel-spray-coeur-battant--LP0155_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-travel-spray-coeur-battant-collections--LP0155_PM2_Front%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0200',
        name: 'Travel Spray Étoile Filante',
        price: '$295.00',
        detail: 'Osmanthus from China - absolute',
        intro: "Like a sun in the heart of the night, the shooting star sends a universal message of hope, an invitation to shine and make one's most precious dreams come true. Jacques Cavallier Belletrud reveals this unique brilliance thanks to an absolute of osmanthus, a raw material he's loved since childhood. Here, the 'flower of light' infuses its naturally fruity softness, while a tinge of jasmine from Grasse amplifies its velvety character. This marvelous radiance attains its zenith upon contact with fresh, vibrant magnolia essence from China. Touched by grace, Étoile Filante carries in its heart the most beautiful emotions. A perfume that celebrates joy, hope, and beauty in its purest state.",
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-travel-spray-%C3%A9toile-filante--LP0200_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-travel-spray-%C3%A9toile-filante-collections--LP0200_PM2_Front%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0084',
        name: 'Le Jour Se Lève',
        price: '$300.00',
        detail: 'Mandarin from Italy',
        intro: 'The first fresh and bright rays of daybreak always seem miraculous. They pierce the night sky with the promise of a blank page, a new adventure to experience. A special moment that the Master Perfumer Jacques Cavallier Belletrud has sought to capture with a sundrenched mandarin. Revealing all of its facets in broad daylight, the fruit is illuminated by sambac jasmine and imbued with the freshness of a blackcurrant accord. Le Jour Se Lève is an optimistic and stimulating breath of early morning air. An invitation to set off for new horizons.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-le-jour-se-l%C3%A8ve--LP0084_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-le-jour-se-l%C3%A8ve-collections--LP0084_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0092',
        name: 'Travel Spray Le Jour Se Lève',
        price: '$295.00',
        detail: 'Sambac jasmine',
        intro: 'The first fresh and bright rays of daybreak always seem miraculous. They pierce the night sky with the promise of a blank page, a new adventure to experience. A special moment that the Master Perfumer Jacques Cavallier Belletrud has sought to capture with a sundrenched mandarin. Revealing all of its facets in broad daylight, the fruit is illuminated by sambac jasmine and imbued with the freshness of a blackcurrant accord. Le Jour Se Lève is an optimistic and stimulating breath of early morning air. An invitation to set off for new horizons.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-travel-spray-le-jour-se-l%C3%A8ve--LP0092_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-travel-spray-le-jour-se-l%C3%A8ve-collections--LP0092_PM2_Front%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0092',
        name: 'Travel Spray Le Jour Se Lève',
        price: '$295.00',
        detail: 'Jasmine from Grasse Absolute',
        intro: 'Rising like a mirage amid immense sand dunes, a flower unfurls its sumptuous colors. Marked by lasting memories of an oasis with lush vegetation in the middle of the Saudi Arabian desert, Master Perfumer Jacques Cavallier Belletrud pays homage to three flowers from the region that have become emblematic of perfumery all over the world: jasmine, orange blossom, and the rose. In a composition brimming with contrasts, the depth of Oud Assam bows upon contact with the radiant, honeyed tones of this nectar of flowers. A suave, colorful trail that leaves a distinctive imprint of absolute sophistication.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-fleur-du-d%C3%A9sert--LP0287_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-fleur-du-d%C3%A9sert-collections--LP0287_PM1_Closeup%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0282',
        name: 'CITY OF STARS',
        price: '$300.00',
        detail: 'Blood Orange',
        intro: "Master Perfumer Jacques Cavallier Belletrud offers a festive ode to Los Angeles by night, its excitement and extravagance, from star-studded boulevards to the constellations shimmering above the skyline. As darkness falls, the city's lights surge in a sensual olfactory tableau. A citrus quintet dazzles like a thousand flashbulbs: lemon, blood orange, red mandarin, bergamot and lime swirl and dance, gradually succumbing to the Tiaré flower's voluptuous embrace. Warmed by noble sandalwood, a dry down of powdery musk alludes to a passion that disperses only with the morning's first rays. A painterly interpretation of a night in the City of Stars.",
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-city-of-stars--LP0282_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-city-of-stars-for-women--LP0282_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0226',
        name: 'On the Beach',
        price: '$300.00',
        detail: 'Yuzu from Japan',
        intro: 'The ecstasy of the sun, the rhythm of the sea and the gentle warmth of sand on the skin. Master perfumer Jacques Cavallier Belletrud blends the infinite emotions of a day spent on a sunny beach. Yuzu, a rare citrus from Japan, is a burst of bliss on the skin. Its surprising freshness and brightness glides into the softness of neroli. Thyme, rosemary, pink pepper, cloves… a sandy note of aromatic herbs perfects the olfactory landscape, while a veil of cypress brings generous, woody shade to a pure summer day.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-on-the-beach--LP0226_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-on-the-beach-for-women--LP0226_PM1_Other%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0175',
        name: 'California Dream',
        price: '$300.00',
        detail: 'Ambrette',
        intro: "It's the lengthening of a perfect day. Watching night fall. Drinking in colours. Standing before the horizon. In this iridescent fragrance, the Master Perfumer Jacques Cavallier Belletrud holds onto the moment, captures the resonance of a sunset. The ardent mandarin is consumed by joyfulness, tempered by the diaphanous ambrette and its subtle warmth. And the evening gets underway as graceful, vanilla-tinged benzoin envelops the skin in an affectionate balm, as light as a summer night.",
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-california-dream--LP0175_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-california-dream-for-women--LP0175_PM1_Detail%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0313',
        name: 'Afternoon Swim',
        price: '$300.00',
        detail: 'Bergamot',
        intro: "A plunge into an ocean of sensations. Feeling all the energy of the waves washing over the skin on a hot summer's day. Master Perfumer Jacques Cavallier Belletrud pays homage to the citruses he particularly loves. He ennobles a rare Sicilian orange lush with juice, like an explosion of vitamins. A sensation of immense freshness imbues this perfume in which bergamot drifts toward a wave of delights, set against a deep current of mandarin.",
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-afternoon-swim--LP0313_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-afternoon-swim-for-women--LP0313_PM1_Interior%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0052',
        name: "L'Immensité",
        price: '$300.00',
        detail: 'Fresh ginger',
        intro: "To open your arms so wide it's as if they were wings deployed to take flight. Like a response to a vast, beckoning sea that nourishes fantasies of total freedom. Sometimes, finding yourself before a limitless horizon that stretches to the sky is all it takes to make your heart beat faster. Inspired by this invigorating impression captured during his travels, Master Perfumer Jacques Cavallier Belletrud composed a laser-sharp ode to freshness. A crackling whisper of ginger brightened by the bitterness of grapefruit and softened by an addictive and sensual amber note. The promise of new horizons, like a fresh page waiting to invent a new life.",
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-l-immensit%C3%A9--LP0052_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-l-immensit%C3%A9-collections--LP0052_PM1_Interior%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0072',
        name: "Travel Spray L'Immensité",
        price: '$295.00',
        detail: 'Fresh ginger',
        intro: "To open your arms so wide it's as if they were wings deployed to take flight. Like a response to a vast, beckoning sea that nourishes fantasies of total freedom. Sometimes, finding yourself before a limitless horizon that stretches to the sky is all it takes to make your heart beat faster. Inspired by this invigorating impression captured during his travels, Master Perfumer Jacques Cavallier Belletrud composed a laser-sharp ode to freshness. A crackling whisper of ginger brightened by the bitterness of grapefruit and softened by an addictive and sensual amber note. The promise of new horizons, like a fresh page waiting to invent a new life.",
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-travel-spray-l-immensit%C3%A9--LP0072_PM2_Front%20view.png?wid=656&hei=656',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-travel-spray-l-immensit%C3%A9-collections--LP0072_PM1_Interior%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0254',
        name: 'Set of 3 x 100ml Fragrances',
        price: '$900.00',
        detail: 'Fresh ginger',
        intro: "A deluxe set conceived for the most curious or those who don't want to choose.\n Météore, L'Immensité & Orage, three creations from Les Parfums Louis Vuitton, three destinations, three emotions to gift or to keep for oneself.",
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-set-of-3-x-100ml-fragrances--LP0254_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-set-of-3-x-100ml-fragrances-collections--LP0254_PM2_Front%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0332',
        name: "LV x YK L'Immensité",
        price: '$365.00',
        detail: 'Grapefruit',
        intro: "Featured in the exclusive new Louis Vuitton x Yayoi Kusama collaboration, the LVxYK L'Immensité limited fragrance edition highlights the obliteration fantasy of the artist and nourishes excitement of total freedom. Inspired by this invigorating impression captured during his travels, Master Perfumer Jacques Cavallier Belletrud composed a laser-sharp ode to freshness. A crackling whisper of ginger brightened by the bitterness of grapefruit and softened by an addictive and sensual amber note. The promise of new horizons, like a fresh page waiting to invent a new life.",
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-x-yk-l-immensit%C3%A9--LP0332_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-x-yk-l-immensit%C3%A9-collections--LP0332_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0095',
        name: 'Ombre Nomade',
        price: '$385.00',
        detail: 'Oud Wood',
        intro: 'Featured in the exclusive new Louis Vuitton x Yayoi Kusama collaboration, the LVxYK L’Immensité limited fragrance edition highlights the obliteration fantasy of the artist and nourishes excitement of total freedom. Inspired by this invigorating impression captured during his travels, Master Perfumer Jacques Cavallier Belletrud composed a laser-sharp ode to freshness. A crackling whisper of ginger brightened by the bitterness of grapefruit and softened by an addictive and sensual amber note. The promise of new horizons, like a fresh page waiting to invent a new life.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-ombre-nomade--LP0095_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-ombre-nomade-gifts--LP0095_PM1_Cropped%20worn%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LS0153',
        name: '100ML Travel Case',
        price: '$645.00',
        detail: 'The reference is either made in France, Spain, Italy or in the US.',
        intro: 'In creating the Fragrance Travel Cases, Louis Vuitton applies its savoir-faire and mastery in custom-designing the perfect case for transporting and protecting each item of one’s personal belongings. The 100ML travel case conserves and protects your perfume bottle, closing securely with a buckle. Slip it into your bag in every situation.The 100ml travel case can also be personalized in store to the initials of your choice.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-100ml-travel-case--LS0153_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-100ml-travel-case-monogram-canvas-travel--LS0153_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0287',
        name: 'FLEUR DU DÉSERT',
        price: '$385.00',
        detail: 'Jasmine from Grasse Absolute',
        intro: 'Rising like a mirage amid immense sand dunes, a flower unfurls its sumptuous colors. Marked by lasting memories of an oasis with lush vegetation in the middle of the Saudi Arabian desert, Master Perfumer Jacques Cavallier Belletrud pays homage to three flowers from the region that have become emblematic of perfumery all over the world: jasmine, orange blossom, and the rose. In a composition brimming with contrasts, the depth of Oud Assam bows upon contact with the radiant, honeyed tones of this nectar of flowers. A suave, colorful trail that leaves a distinctive imprint of absolute sophistication.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-fleur-du-d%C3%A9sert--LP0287_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-fleur-du-d%C3%A9sert-collections--LP0287_PM1_Closeup%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0120',
        name: 'Les Sables Roses',
        price: '$385.00',
        detail: 'Centifolia rose absolute',
        intro: "The desert possesses a singular magic that captivates travelers. At dawn, the sun's first rays blend the dunes and the sky, night and day, and the earth and clouds into a majestic pink. Fascinated by the harmony that springs from contrasts, the Master Perfumer Jacques Cavallier Belletrud has composed a hot and cold perfume playing with two exceptional qualities of rose and oud. Its simple, limpid script underscores the natural beauty and richness of two of perfumery's most legendary ingredients. The freshness of rose and the woody depths of oud exalt one another, borne aloft by a warm swirl of ambergris.",
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-les-sables-roses--LP0120_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-les-sables-roses-collections--LP0120_PM1_Interior%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0251',
        name: 'Cosmic Cloud',
        price: '$550.00',
        detail: 'Tonka Bean from Venezuela',
        intro: 'A journey to the unexplored, a flight over this earthly existence. Here, travel is transfigured into an odyssey beyond the borders of reality. To illustrate this interactive sensory deep-dive, Jacques Cavallier Belletrud conceived a nectar of musks. Their many powdery, fruity facets linger endlessly against the skin. Constituting a surprisingly daring choice in the world of high perfumery, a seductive caress sweetened by the chocolate-coated almond notes of tonka bean. Cosmic Cloud shines in the firmament, grounding us in the immaterial beauty of faraway worlds.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-cosmic-cloud--LP0251_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-cosmic-cloud-exceptional-creations--LP0251_PM1_Detail%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0247',
        name: 'Dancing Blossom',
        price: '$550.00',
        detail: 'May Rose from Grasse',
        intro: 'Let yourself be swept away, far away, to explore the constantly changing kingdom of the seasons. To contemplate the extraordinary lushness of nature, Jacques Cavallier Belletrud has chosen to interpret an intensely floral expression, both delicate and powerful. The exquisitely precious Grasse rose unfurls its majestic splendour, while Sambac jasmine and Indian tuberose embellish the composition with their fleshy beauty. Chinese osmanthus complements the bouquet with its fruity apricot inflection. An extraordinarily prolific swirl of petals, a colourful yet subtle bouquet of sweeping emotions.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-dancing-blossom--LP0247_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-dancing-blossom-exceptional-creations--LP0247_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0249',
        name: 'Symphony',
        price: '$550.00',
        detail: 'Grapefruit',
        intro: 'Discover an extraordinary island where the sea and sky unite. A sensory immersion, the endless pleasure of absolute light, the radiant vibration of wind-blown islands. Azure dreams call to the imagination. This is the first fragrance composition exploring endless freshness with a dazzling trail. The sweet piquancy of fresh ginger zest in a cocktail of grapefruit, bergamot and orange. Fruity, velvety, scintillating roundness offers everlasting refreshment. A radiant vibration, a sensual score with facetted notes to accompany the melody of a wakening world.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-symphony--LP0249_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-symphony-exceptional-creations--LP0249_PM1_Interior%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0245',
        name: 'Rhapsody',
        price: '$550.00',
        detail: 'Ylang Ylang',
        intro: 'Where the horizon stretches out to infinity, an extraordinary journey begins : captivating, exhilarating. This is where everything begins, and where everything is reborn in a perpetual olfactory alchemy. The master perfumer Jacques Cavallier Belletrud reinvents one of the most sophisticated accords in perfumery – chypre – to elevate its DNA. Radiant Jasmine grandiflorum mingles with ylang ylang to transfigure patchouli and wreathe it in light. Woody notes and vetiver intensify the structure for chiaroscuro relief, while fresh, clear maté intensifies the verdant character of this exquisitely crafted perfume. The quintessence of elegance.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-rhapsody--LP0245_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-rhapsody-exceptional-creations--LP0245_PM1_Detail%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0171',
        name: 'Travel Spray Nuit de Feu',
        price: '$385.00',
        detail: 'White Incense',
        intro: 'Plunged into the icy night, the desert seems frozen under an endlessly star-studded sky. In the heart of this darkness, a camp fire is crackling, its dancing flames warm the travelers, its smoke curling upwards into the sky. This moment, this scent of eternity, has inspired the Master Perfumer Jacques Cavallier Belletrud to create a vibrant tribute to incense, a sacred scent revered down the ages and across cultures. It is the signature ingredient in Nuit de Feu, with three exceptional essences in its trail. Softened by an exclusive infusion of natural leather, and glorified by a powerful musk accord, the incense molds the mystical scrolls of oud wood into a perfume that resonates with the history of the world.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-travel-spray-nuit-de-feu--LP0171_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-travel-spray-nuit-de-feu-collections--LP0171_PM2_Front%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0167',
        name: 'Nuit de Feu',
        price: '$385.00',
        detail: 'White Incense',
        intro: 'Plunged into the icy night, the desert seems frozen under an endlessly star-studded sky. In the heart of this darkness, a camp fire is crackling, its dancing flames warm the travelers, its smoke curling upwards into the sky. This moment, this scent of eternity, has inspired the Master Perfumer Jacques Cavallier Belletrud to create a vibrant tribute to incense, a sacred scent revered down the ages and across cultures. It is the signature ingredient in Nuit de Feu, with three exceptional essences in its trail. Softened by an exclusive infusion of natural leather, and glorified by a powerful musk accord, the incense molds the mystical scrolls of oud wood into a perfume that resonates with the history of the world.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-nuit-de-feu--LP0167_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-nuit-de-feu-gifts--LP0167_PM1_Interior%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0124',
        name: 'Travel Spray Les Sables Roses',
        price: '$385.00',
        detail: 'Centifolia rose absolute',
        intro: "The desert possesses a singular magic that captivates travelers. At dawn, the sun's first rays blend the dunes and the sky, night and day, and the earth and clouds into a majestic pink. Fascinated by the harmony that springs from contrasts, the Master Perfumer Jacques Cavallier Belletrud has composed a hot and cold perfume playing with two exceptional qualities of rose and oud. Its simple, limpid script underscores the natural beauty and richness of two of perfumery's most legendary ingredients. The freshness of rose and the woody depths of oud exalt one another, borne aloft by a warm swirl of ambergris.",
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-travel-spray-les-sables-roses--LP0124_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-travel-spray-les-sables-roses-collections--LP0124_PM2_Front%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'LP0160',
        name: 'Météore',
        price: '$300.00',
        detail: 'Mandarin from Italy',
        intro: "A magnetic name that evokes power and light. A fragrance that arouses fascination in its wake, like the dazzlingly flamboyant clouds that so captivate humankind. To capture such exhilarating energy, Master Perfumer Jacques Cavallier Belletrud chose the Sicilian mandarin. An ingredient of such exceptional quality, it infuses the perfume's heart with ethereal freshness, resonating as it comes into contact with a trio of peppers.",
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-m%C3%A9t%C3%A9ore--LP0160_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-m%C3%A9t%C3%A9ore-collections--LP0160_PM1_Detail%20view.png?wid=1240&hei=1240',
    },
];

export default products;