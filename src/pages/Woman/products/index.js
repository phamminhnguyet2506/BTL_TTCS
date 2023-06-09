const products = [
    {
        id: 'N40466',
        name: 'Félicie Pochette',
        price: '$1,620.00',
        detail: '8.3 x 4.7 x 1.2 inches (Length x height x width)',
        intro: 'The Félicie Pochette is made from Damier Azur canvas overlaid with a bold graphic print inspired by the world of travel so dear to Louis Vuitton. The summery motif, a nautical pattern made of ropes and chains, in fresh feminine colors with golden highlights, brings a playful yet chic feel to this practical pouch.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-f%C3%A9licie-pochette--N40466_PM2_Front%20view.png?wid=656&hei=656',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-f%C3%A9licie-pochette-damier-azur-small-leather-goods--N40466_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'N40468',
        name: 'Victorine Wallet',
        price: '$685.00',
        detail: '4.7 x 3.7 x 0.6 inches (Length x height x width)',
        intro: 'The Victorine Wallet looks chic fashioned from canvas with a print combining the Damier Azur motif with a nautical pattern, in a feminine colorway, made of ropes and chains. This very small wallet, with a flap that closes thanks to a “Louis Vuitton” engraved, gold-color press-stud, contains three pockets and six card slots.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-victorine-wallet--N40468_PM2_Front%20view.png?wid=656&hei=656',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-victorine-wallet-damier-azur-small-leather-goods--N40468_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'N64022',
        name: 'Victorine Wallet',
        price: '$575.00',
        detail: '4.7 x 3.7 x 0.6 inches (Length x height x width)',
        intro: 'The compact Victorine wallet in Damier Azur canvas combines femininity and functionality. It opens out to reveal many practical features, including card slots and pockets for bills and coins. Its envelope-style flap is sealed with a press-stud.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-victorine-wallet--N64022_PM2_Front%20view.png?wid=656&hei=656',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-victorine-wallet-damier-azur-small-leather-goods--N64022_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'N40469',
        name: 'Toiletry Pouch On Chain',
        price: '$1,770.00',
        detail: '9.8 x 7.9 x 2.2 inches (Length x height x width)',
        intro: 'The Toiletry Pouch On Chain in coated canvas features a daring print combining the summery Damier Azur pattern with a nautical motif made of ropes and chains. Inspired by the Monogram Toiletry Pouch from 1901, this pouch includes a removable gold-color chain to create a fashionable bag, which can be carried by hand or on the shoulder.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-toiletry-pouch-on-chain--N40469_PM2_Front%20view.png?wid=656&hei=656',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-toiletry-pouch-on-chain-damier-azur-small-leather-goods--N40469_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'N40480',
        name: 'Zippy Wallet',
        price: '$1,020.00',
        detail: '7.7 x 4.1 x 1 inches (Length x height x width)',
        intro: 'Made from coated canvas with a print that brings together the Damier Azur checkerboard pattern with a bold nautical motif composed of ropes and chains, the Zippy Wallet evokes the ports of the French Riviera. This zip-around wallet opens to reveal a myriad of pockets, compartments and card slots.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-zippy-wallet--N40480_PM2_Front%20view.png?wid=656&hei=656',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-zippy-wallet-damier-azur-small-leather-goods--N40480_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'N61264',
        name: 'Clémence Wallet',
        price: '$590.00',
        detail: '7.9 x 3.5 x 0.8 inches (Length x height x width)',
        intro: 'The slim-line Clémence wallet is crafted from Damier Azur canvas with a grained-leather lining. Its all-round zip opens wide to allow easy access to its two generous compartments, complete with pockets and card slots. Refined details, such as the leather zip pull, mean the Clémence can also be used as a clutch.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-clemence-wallet--N61264_PM2_Front%20view.png?wid=656&hei=656',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-cl%C3%A9mence-wallet-damier-azur-small-leather-goods--N61264_PM1_Detail%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'N63208',
        name: 'Sarah Wallet',
        price: '$720.00',
        detail: '7.5 x 3.9 inches (Length x height x width)',
        intro: "Damier Azur canvas brings a fresh look to Louis Vuitton's Sarah wallet, a timeless model with a simple, elegant exterior and a well-organized interior. Its envelope-style flap, which is secured with a gold-tone press-stud, opens to reveal two large compartments, multiple card slots and a zipped coin pocket.",
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sarah-wallet--N63208_PM2_Front%20view.png?wid=656&hei=656',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sarah-wallet-damier-azur-small-leather-goods--N63208_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'N60229',
        name: 'Zippy Coin Purse Padlock',
        price: '$505.00',
        detail: '4.3 x 3.3 x 0.8 inches (Length x height x width)',
        intro: 'Fresh and feminine in Damier Azur canvas, the Zippy coin purse carries much more than just coins. Its secure zip opens wide to reveal a grained-leather interior with space for cards and folded bills. Small enough to fit into practically any pocket or bag, the Zippy coin purse is the perfect everyday companion.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-zippy-coin-purse-padlock--N60229_PM2_Front%20view.png?wid=656&hei=656',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-zippy-coin-purse-padlock-damier-azur-small-leather-goods--N60229_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'M42616',
        name: 'Zippy Wallet',
        price: '$850.00',
        detail: '7.7 x 4.1 x 1 inches (Length x height x width)',
        intro: "One of Louis Vuitton's most iconic models, the Zippy wallet in Monogram canvas offers an array of practical features, including spacious compartments, a zipped coin pocket and multiple card slots. Named for its secure, all-round zip, the wallet opens to reveal a grained-leather lining. This complete, functional design can double as a clutch.",
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-zippy-wallet--M42616_PM2_Front%20view.png?wid=656&hei=656',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-zippy-wallet-monogram-small-leather-goods--M42616_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'M61298',
        name: 'Clémence Wallet',
        price: '$590.00',
        detail: '7.9 x 3.5 x 0.8 inches (Length x height x width)',
        intro: "Louis Vuitton's classic Clémence wallet is an elegant and compact design offering multiple practical features. In iconic Monogram canvas, it is given a playful, feminine feel by its brightly colored leather zipper and lining.",
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-cl%C3%A9mence-wallet--M61298_PM2_Front%20view.png?wid=656&hei=656',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-cl%C3%A9mence-wallet-monogram-small-leather-goods--M61298_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'N60534',
        name: 'Clémence Wallet',
        price: '$590.00',
        detail: '7.9 x 3.5 x 0.8 inches (Length x height x width)',
        intro: "The Clémence wallet combines Louis Vuitton's historic Damier Ebene canvas with a colorful grained-leather lining. This slim-line design unzips to reveal a well-organized interior with two large compartments, a zipped coin pocket and several card slots. Finished with a refined leather zip pull, it can also be carried as a clutch.",
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-cl%C3%A9mence-wallet--N60534_PM2_Front%20view.png?wid=656&hei=656',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-cl%C3%A9mence-wallet-damier-ebene-small-leather-goods--N60534_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'M60703',
        name: 'Card Holder',
        price: '$265.00',
        detail: '4.3 x 2.8 inches (Length x height x width)',
        intro: "Crafted from Louis Vuitton's iconic Monogram canvas, the Card Holder is a smart, simple accessory that is ideal for active lifestyles. Notable for its slim design, it contains three card slots: a large one in the center and two on either side. Its grained-leather lining adds a touch of refinement.",
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-card-holder--M60703_PM2_Front%20view.png?wid=656&hei=656',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-card-holder-monogram-small-leather-goods--M60703_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'N60046',
        name: 'Zippy wallet',
        price: '$265.00',
        detail: '7.7 x 4.1 x 1 inches (Length x height x width)',
        intro: 'This iconic wallet just got an upgrade! Now with four additional credit card slots and a playful new colored lining, the Zippy Wallet in Damier Ebene canvas is more versatile than ever.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-zippy-wallet--N60046_PM2_Front%20view.png?wid=656&hei=656',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-zippy-wallet-damier-ebene-small-leather-goods--N60046_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'N61722',
        name: 'Card Holder',
        price: '$265.00',
        detail: '4.3 x 2.8 x 0.2 inches (Length x height x width)',
        intro: 'This simple card holder in Damier canvas slips easily into a pocket. It holds credit cards, transport cards or business cards in its three slots.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-card-holder--N61722_PM2_Front%20view.png?wid=656&hei=656',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-card-holder-damier-ebene-small-leather-goods--N61722_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'N64423',
        name: 'Rosalie Coin Purse',
        price: '$400.00',
        detail: '4.3 x 3.1 x 1 inches (Length x height x width)',
        intro: 'Combining Damier Ebene canvas with colorful grained cowhide leather, the Rosalie coin purse is a sweet, feminine design. Its tiny proportions allow it to slip easily into a bag or pocket, yet it is surprisingly spacious. Its distinctive rounded flap is secured with a press-stud.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-rosalie-coin-purse--N64423_PM2_Front%20view.png?wid=656&hei=656',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-rosalie-coin-purse-damier-ebene-small-leather-goods--N64423_PM1_Detail%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'N58009',
        name: 'Mini Pochette Accessoires',
        price: '$745.00',
        detail: '5.5 x 3.5 x 0.8 inches (Length x height x width)',
        intro: 'The Mini Pochette Accessoires in Damier Ebene canvas is the perfect way to carry essentials. Its supple, rounded shape gives this pouch a particularly pleasant feel, while its zipped compartment offers a surprising amount of space. It can be hand-carried or attached to a larger bag thanks to the gold-tone chain and hook.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-mini-pochette-accessoires--N58009_PM2_Front%20view.png?wid=656&hei=656',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-mini-pochette-accessoires-damier-ebene-small-leather-goods--N58009_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'M81412',
        name: 'Toiletry Pouch On Chain',
        price: '$1,760.00',
        detail: '9.8 x 7.9 x 2.2 inches (Length x height x width)',
        intro: 'The Toiletry Pouch On Chain was inspired by the Monogram Toiletry Pouch cosmetic pouch, created in 1901, which Louis Vuitton clients also used as a clutch. This reworked design adds a removable chain and refined natural leather trim to create a fashionable bag, which can be carried in the hand or on the shoulder. Concealed inside is a smaller version of the pouch, which can also be used separately.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-toiletry-pouch-on-chain--M81412_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-toiletry-pouch-on-chain-monogram-small-leather-goods--M81412_PM1_Worn%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'M69161',
        name: 'Card Holder',
        price: '$265.00',
        detail: '4.3 x 2.8 x 0.2 inches (Length x height x width)',
        intro: 'This simple yet chic card holder in Monogram canvas slips easily into a pocket. It holds credit cards, transport cards or business cards in its three slots.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-card-holder--M69161_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-card-holder-monogram-reverse-small-leather-goods--M69161_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'M68725',
        name: 'Dauphine Compact Wallet',
        price: '$1,030.00',
        detail: '4.7 x 3.7 x 1.4 inches (Length x height x width)',
        intro: 'The Dauphine compact wallet takes its style cues from the emblematic Dauphine handbag. Its finely crafted design combines Monogram and Monogram Reverse canvas with calfskin trim, while it is secured by a magnetic Dauphine-signature clasp. This space-efficient wallet features a long pocket for bills and a zipped coin pocket on the side.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-dauphine-compact-wallet--M68725_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-dauphine-compact-wallet-monogram-small-leather-goods--M68725_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'M69353',
        name: 'Zippy Wallet',
        price: '$990.00',
        detail: '7.7 x 4.1 x 1 inches (Length x height x width)',
        intro: 'The Zippy Wallet is made from Giant Monogram Reverse canvas. The oversized LV initials and Monogram blossoms bring fun to this iconic wallet. Versatile thanks to its zip-around opening, it fits easily into most handbags. Or carry it by hand as a miniature clutch.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-zippy-wallet--M69353_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-zippy-wallet-monogram-small-leather-goods--M69353_PM1_Worn%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'M62361',
        name: 'Rosalie Coin Purse',
        price: '$400.00',
        detail: '4.3 x 3.1 x 1 inches (Length x height x width)',
        intro: 'The tiny Rosalie coin purse in Monogram canvas is given a feminine feel by its colorful grained-leather lining. For such a compact design, it is surprisingly spacious, containing a gusseted compartment, two card slots and a zipped coin pocket with a leather pull.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-rosalie-coin-purse--M62361_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-rosalie-coin-purse-monogram-small-leather-goods--M62361_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'M60531',
        name: 'Sarah Wallet',
        price: '$720.00',
        detail: '7.5 x 3.9 inches (Length x height)',
        intro: "One of Louis Vuitton's classic models, the Sarah wallet combines Monogram canvas with a grained-leather lining. Its elegant envelope-style design conceals a spacious interior with two large compartments, a central zipped coin pocket and multiple card slots. The perfect choice to keep all essentials in one safe place.",
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sarah-wallet--M60531_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-sarah-wallet-monogram-small-leather-goods--M60531_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'M58009',
        name: 'Mini Pochette Accessoires',
        price: '$745.00',
        detail: '5.5 x 3.5 x 0.8 inches (Length x height x width)',
        intro: 'This compact cosmetic pouch in Monogram canvas slips easily into a handbag or suitcase. Its round shape and flat base facilitates access to small products.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-mini-pochette-accessoires--M58009_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-mini-pochette-accessoires-monogram-small-leather-goods--M58009_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: 'M47515',
        name: 'Cosmetic Pouch',
        price: '$570.00',
        detail: '6.7 x 4.7 x 2.4 inches (Length x height x width)',
        intro: 'The Mini Pochette Accessoires in Monogram canvas is a stylish way to carry essentials. Its secure zip protects a spacious compartment, while the chain and hook enable it to be attached to a larger bag, as well as carried in the hand. The rounded shape and supple canvas give this pouch a particularly pleasant feel.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-cosmetic-pouch--M47515_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-cosmetic-pouch-monogram-canvas-travel--M47515_PM1_Side%20view.png?wid=1240&hei=1240',
    },
    {
        id: '1ABC9F',
        name: 'Collarless Wool Twill Blazer',
        price: '$3,800.00',
        detail: 'Length : 73,5 cm / 28,9 inches',
        intro: 'This blazer is clean and elegant in a collarless straight-cut silhouette tailored from refined wool twill with three sharp pockets. The front is fastened with a chic jewel button and brass chain detail, while a white Monogram silk lining discreetly completes the look with an iconic signature accent.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-collarless-wool-twill-blazer--FPJA15ZL2900_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-collarless-wool-twill-blazer-ready-to-wear--FPJA15ZL2900_PM1_Worn%20view.png?wid=1240&hei=1240',
    },
    {
        id: '1ABBS4',
        name: 'Technical Jersey Peter Pan Collar Dress',
        price: '$3,800.00',
        detail: 'Length : 85 cm / 33,5 inches',
        intro: 'This dress is cut from sleek technical jersey that skims and smoothes the figure for a clean, sporty look, which is underscored with an exposed half-zipper fastening and a golden triangular carabiner detail on the hip. Trim short sleeves and a contrasting Peter Pan collar complete the look with a chic feminine feel.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-technical-jersey-peter-pan-collar-dress%20--FPDR15G72900_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-technical-jersey-peter-pan-collar-dress%20-ready-to-wear--FPDR15G72900_PM1_Worn%20view.png?wid=1240&hei=1240',
    },
    {
        id: '1ABBUS',
        name: 'Monogram Jacquard One-Piece Swimsuit',
        price: '$590.00',
        detail: 'Main Material : 89% Polyamide, 11% Elasthanne',
        intro: 'This chic one-piece swimsuit is fresh and feminine in lightweight, bright white swimwear jersey featuring a discreet tone-on-tone allover Monogram motif. The front is cut with a flattering square neckline and spaghetti straps, while the low back is elegantly criss-crossed with slim laces threaded through brass Monogram Flower hardware.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-jacquard-one-piece-swimsuit%20%C2%A0--FPSW17UN7001_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-jacquard-one-piece-swimsuit%20%C2%A0-ready-to-wear--FPSW17UN7001_PM1_Worn%20view.png?wid=1240&hei=1240',
    },
    {
        id: '1ABCCL',
        name: 'Monogram Wave Scarf Sleeveless T-shirt',
        price: '$1,240.00',
        detail: 'Main Material : 100% Cotton',
        intro: 'Chic and contemporary seasonal signatures elevate this sporty staple with an elegant twist: This T-shirt is crafted in a casual sleeveless cut from lightweight cotton jersey. The neckline is trimmed with a scaled-up LV Circle chain detail and golden eyeles which hold in place a statement Monogram wave scarf for a graceful, graphic finish.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-wave-scarf-sleeveless-t-shirt%20--FPTS04UOL900_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-wave-scarf-sleeveless-t-shirt%20-ready-to-wear--FPTS04UOL900_PM1_Worn%20view.png?wid=1240&hei=1240',
    },
    {
        id: '1ABCCS',
        name: 'Monogram Wave T-shirt ',
        price: '$1,240.00',
        detail: 'Main Material : 100% Cotton',
        intro: "This staple T-shirt is cut in a slightly oversized fit from cotton jersey in this season's graphic Monogram wave motif, which reimagines classic nautical codes with fresh blue accents and bold diagonal stripes. The sporty contrasting crew neckline is trimmed with a playfully scaled-up golden LV Circle chain for a final House touch.",
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-wave-t-shirt%20--FPTS02Z00610_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-wave-t-shirt%20-ready-to-wear--FPTS02Z00610_PM1_Worn%20view.png?wid=1240&hei=1240',
    },
    {
        id: '1ABCLI',
        name: 'Monogram Wave T-shirt ',
        price: '$1,310.00',
        detail: 'Main Material : 100% Silk',
        intro: "A combination of mini Monogram details, bold stripes and blue accents reimagines these classic silk twill pajama shorts with this season's graphic, contemporary take on nautical style. The fit is casual and comfortable for relaxed wear, complete with an easy elasticated waistband. Finished with a buttoned patch pocket for a classic look.",
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-wave-pajama-shorts%20--FPPA26ZZ0610_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-wave-pajama-shorts%20-ready-to-wear--FPPA26ZZ0610_PM1_Cropped%20worn%20view.png?wid=1240&hei=1240',
    },
    {
        id: '1ABCLQ',
        name: 'Monogram Wave Pajama Shirt',
        price: '$2,350.00',
        detail: 'Main Material : 100% Silk',
        intro: "This season's signature Monogram wave print elevates this chic pajama shirt into a striking statement. The motif combines mini Monogram details with graphic stripes and pops of blue as part of the collection’s contemporary twist on nautical style. Crafted in a loose, loungey fit from fluid silk twill for laidback wear.",
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-wave-pajama-shirt%C2%A0--FPBL23ZZ0610_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-wave-pajama-shirt%20-ready-to-wear--FPBL23ZZ0610_PM1_Cropped%20view.png?wid=1240&hei=1240',
    },
    {
        id: '1ABCEB',
        name: 'Monogram Wave Self-Tie T-Shirt',
        price: '$1,170.00',
        detail: 'Main Material : 100% Cotton',
        intro: 'The House’s casual self-tie T-shirt returns for the season in a statement allover Monogram wave print, which reimagines classic nautical codes with graphic diagonal stripes, fresh blue tones and iconic Monogram accents. A black crew neckline subtly nods at sporty styles while an oversized golden LV Circle chain completes the look with a contemporary signature.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-wave-self-tie-t-shirt%20--FPTS07Z00610_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-monogram-wave-self-tie-t-shirt%20-ready-to-wear--FPTS07Z00610_PM1_Worn%20view.png?wid=1240&hei=1240',
    },
    {
        id: '1ABCV4',
        name: 'Louis 4 Vuitton T-Shirt',
        price: '$850.00',
        detail: 'Main Material : 100% Cotton',
        intro: 'A spirited seasonal signature elevates this staple T-shirt with a classic sporty feel. Cut from comfortable, lightweight cotton jersey in a casual fit for everyday styling. The front is embellished with a flocked Louis 4 Vuitton motif in a bold shade, which is complemented by a matching crew neckline. Finished with a brass LV Circle chain detail.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-louis-4-vuitton-t-shirt--FPTS10UOL614_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-louis-4-vuitton-t-shirt-ready-to-wear--FPTS10UOL614_PM1_Worn%20view.png?wid=1240&hei=1240',
    },
    {
        id: '1ABCNI',
        name: 'Louis 4 Vuitton Knitted Pullover',
        price: '$1,310.00',
        detail: 'Main Material : 85% Cotton, 15% Cashmere',
        intro: 'Playful and preppy, this pullover is crafted from a rich, cozy cotton-cashmere knit in a casual shape for comfortable everyday wear. The chest is embellished with this season’s spirited Louis 4 Vuitton signature in a contrasting color for a bold, sporty look.',
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-louis-4-vuitton-knitted-pullover%20--FPKL01160614_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-louis-4-vuitton-knitted-pullover%20-ready-to-wear--FPKL01160614_PM1_Worn%20view.png?wid=1240&hei=1240',
    },
    {
        id: '1ABCLA',
        name: 'Vichy Check Pants',
        price: '$1,830.00',
        detail: 'Main Material : 55% Polyester, 45% Wool',
        intro: "A chic play of classic and contemporary codes: Tailored from wool toile in this season's graphic vichy checks, these pants are cut with a flattering high waistband and subtly flared legs to elongate the silhouette. Front and back creases elevate the finish, while a Monogram canvas zipper pull adds a modern touch to the fastening.",
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-vichy-check-pants%20--FPPA23012653_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-vichy-check-pants%20-ready-to-wear--FPPA23012653_PM1_Worn%20view.png?wid=1240&hei=1240',
    },
    {
        id: '1ABEFV',
        name: 'Vichy Check Preppy Blazer',
        price: '$3,800.00',
        detail: 'Length : 68,5 cm / 27 inches',
        intro: "This season's essential vichy checks refresh the House's staple preppy blazer with a classic graphic look. The timeless fitted shape is tailored from elegant wool toile with smart lapels and three patch pockets. An embroidered LV patch emphasizes the uniform look, while golden LV buttons add a refined finishing touch. Complete with a silk-blend Monogram lining.",
        img1: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-vichy-check-preppy-blazer%20--FPVB01012653_PM2_Front%20view.png?wid=456&hei=456',
        img2: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-vichy-check-preppy-blazer%20-ready-to-wear--FPVB01012653_PM1_Worn%20view.png?wid=1240&hei=1240',
    },
];

export default products;
