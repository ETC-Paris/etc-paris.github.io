var storyContent = ﻿{"inkVersion":19,"root":[["\n","ev","str","^Jouer en français","/str","/ev",{"*":"0.c-0","flg":4},"ev","str","^Play in English","/str","/ev",{"*":"0.c-1","flg":4},{"c-0":["\n",{"#":"IMAGE : https://static.wixstatic.com/media/08d400_a971a24a297e495da63262669715312b~mv2.png"},{"->":"start"},{"->":"0.g-0"},{"#f":5}],"c-1":["\n",{"#":"IMAGE : https://static.wixstatic.com/media/08d400_efc146c6878e44eeb0f70ca00d34144b~mv2.png"},{"->":"start_EN"},{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"start":[["^Si vous pouviez remonter le temps, qui deviendriez-vous ? Une question sans réponse... jusqu'à aujourd'hui ! Grâce à quelques questions seulement, vous allez enfin pouvoir savoir si vous auriez fini shérif, courtisan·e, gangster... et tout cela sans quitter votre salon !","\n","^Alors, êtes-vous prêt·e à nous suivre dans une petite aventure et découvrir votre destin ?","\n",{"#":"IMAGE : https://static.wixstatic.com/media/854513_f396758dacd546d6a3ce4eaf90726843~mv2.png"},"ev","str","^Oui, allons-y !","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Non, je n'ai pas le temps de partir à l'aventure","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"first_choice"},{"#f":5}],"c-1":["\n","^Vous n'avez pas le temps ? Oh, c'est horriblement décevant. Cependant, si vous avez un jour envie d'aventure, de romance, de danger ou d'un brin d'extraordinaire, il vous suffira d'un clic pour nous rejoindre !","\n",["ev","str","^Vous m'avez convaincu·e, je vais prendre le temps !","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Je m'en souviendrai. Au revoir !","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"first_choice"},{"#f":5}],"c-1":["\n",{"->":"final_end"},{"#f":5}]}],{"#f":5}]}],{"#f":1}],"first_choice":[["^Vous avez fait le bon choix. Ce n'est pas tous les jours qu'on a la chance de pouvoir découvrir quelle place on aurait pu se faire dans l'Histoire !","\n","^Mais commençons par le commencement: que recherchez-vous ?","\n","ev","str","^L'aventure !","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^L'amour !","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^L'extraordinaire !","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^Le danger !","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["\n",{"->":"adventure"},{"#f":5}],"c-1":["\n",{"->":"romance"},{"#f":5}],"c-2":["\n",{"->":"extraordinary"},{"#f":5}],"c-3":["\n",{"->":"danger"},{"#f":5}]}],{"#f":1}],"adventure":[[{"#":"IMAGE : https://static.wixstatic.com/media/854513_05f45a9c04ae49f189b3b640859018ce~mv2.png"},"^Aah, l'aventure ! Il n'y a pas de meilleur endroit pour la trouver que les États-Unis de la fin du 19e siècle, que ce soit dans les plaines arides de l'Ouest Sauvage ou les rues mal famées de la Côte Barbare. Mais dites-moi, aimez-vous les chevaux ?","\n","ev","str","^Je les adore !","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Oh non. Chevaux, vaches, très peu pour moi, j'aime les grandes villes !","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^Sage inclination ; au Far West, votre cheval se révèle souvent être votre meilleur ami.","\n","^Avez-vous déjà utilisé des armes à feu ?","\n",["ev","str","^Je sais me défendre","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Oh non, les armes à feu, très peu pour moi !","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^Oui ? Parfait. Ce talent vous sera précieux en ces temps troublés.","\n","^En parlant de trouble, préférez-vous faire respecter la loi, ou l'enfreindre ?","\n",["ev","str","^Je crée mes propres lois !","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Je suis un·e honnête citoyen·ne et j'aiderai à faire respecter la loi","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^Ah, je vois que nous avons affaire à un esprit libre. Dans ce cas, vous seriez comme un poisson dans l'eau dans le gang de <b>Jesse James</b> ; une première étape utile si vous comptez forger votre propre légende !","\n",{"#":"IMAGE : https://static.wixstatic.com/media08d400_abf9fb4415c5436badf4263a7dc87ff4~mv2.png"},{"->":"the_end"},{"#f":5}],"c-1":["\n","^Le Far West a plus que jamais besoin d'hommes et de femmes prêt·es à défendre ses lois ! A ce propos, <b>Wild Bill Hickok</b>, le shérif de la ville de Hays, recherche désespérément de nouveaux députés. Vous devriez lui demander un entretien d'embauche !","\n",{"#":"IMAGE : https://static.wixstatic.com/media/854513_192e3d4671b74a1892abee6f2325074c~mv2.png"},{"->":"the_end"},{"#f":5}]}],{"#f":5}],"c-1":["\n","^Votre réticence est parfaitement compréhensible ; les armes à feu ne conviennent pas à tout le monde. Et que pensez-vous des travaux manuels ?","\n",["ev","str","^Me salir les mains, vous voulez dire ? Hors de question !","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Le travail ne me fait pas peur","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^Je comprends que vous n'aillez pas envie de vous salir les mains, au sens propre comme au sens figuré, mais je me dois de vous informer que le Far West est l'un des endroits les plus salissants qui soit.","\n","^Mais pas de panique - je pense qu'une époque plus... royale répondra parfaitement à vos attentes !","\n",["ev","str","^Parfait, conduisez-y moi !","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Attendez, j'ai changé d'avis, je vais travailler !","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"->":"romance"},{"#f":5}],"c-1":["\n",{"->":".^.^.^.^.c-1"},{"#f":5}]}],{"#f":5}],"c-1":["\n","^Je suis ravi d'entendre que vous êtes prêt·e à vous mettre au travail ! Le Pony Express est à la recherche de cavaliers, et <b>Calamity Jane</b> est la personne rêvée pour vous apprendre les rudiments du courrier postal. Elle est un peu brute de décoffrage, mais je suis sûre que vous vous entendrez comme des larrons en foire en un rien de temps !","\n",{"#":"IMAGE : https://static.wixstatic.com/media/854513_734676adc3e54d83befda98b188a1a81~mv2.png"},{"->":"the_end"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"c-1":["\n","^Si vous préférez les grandes villes aux déserts arides, laissez-moi vous emmenez à San Francisco ! Dans les music-halls enfumés de la Côte Barbare, de nombreuses aventures vous attendent, mais attention : il va falloir être sans pitié !","\n","^Quel est votre plus grand atout ?","\n",["ev","str","^J'ai un talent inné avec les cartes","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^J'ai beaucoup de charme et je sais m'en servir","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^J'ai de la poigne et tout le monde m'obéit","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","^La table de poker est l'endroit parfait pour faire fortune... si vous savez bien cacher votre jeu ! Wild Bill Hickok est le roi du poker et si vous jouez bien vos cartes, il pourrait vous prendre sous son aile...","\n",{"#":"IMAGE : https://static.wixstatic.com/media/08d400_77e4aeee25384849b1e81d85d7bd04e0~mv2.png"},{"->":"the_end"},{"#f":5}],"c-1":["\n","^Le charme est un atout certain. La vie est rude par ici, et les gens ont besoin de réconfort ; une oreille compatissante et une tolérance certaine pour les mains balladeuses vous seront bien utiles, que ce soit dans les cabarets ou les galas les plus huppés !","\n",{"#":"IMAGE : https://static.wixstatic.com/media/08d400_4bf2fc1be018424fa8ed8aba513e9646~mv2.png"},{"->":"the_end"},{"#f":5}],"c-2":["\n","^Avez-vous déjà pensé à diriger votre propre music-hall ? Les joueurs de pokers professionels et les prostituées savent enjoler leur monde, mais si vous avez un tempérament bien trempé et que vous aimez que vos équipes filent droit, ils vous aideront à hisser votre établissement au firmament de la Côte Barbare !","\n",{"#":"IMAGE : https://static.wixstatic.com/media/08d400_2ca866a8252b42c29d5b6f15bf24cdbe~mv2.png"},{"->":"the_end"},{"#f":5}]}],{"#f":5}]}],{"#f":1}],"romance":[[{"#":"IMAGE : https://static.wixstatic.com/media/854513_135cce54328e435c8d51d520367fe89a~mv2.png"},"^Y a-t-il quelque chose de plus réjouissant qu'une romance ? Un regard timide à demi caché par un éventail, des lettres secrètes échangées dans les corridors... Il n'y a pas de meilleur endroit pour être romantique que le Versailles du 18ème siècle !","\n","^Soyez honnêtes : aimez-vous le luxe ?","\n","ev","str","^Bien sûr ! Pourquoi vivre autrement si on en a les moyens ?","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Non, j'aime la vie simple","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^Pourquoi vivre dans autre chose que le luxe, je suis d'accord ! Mais êtes-vous intimidé·e par la royauté ?","\n",["ev","str","^Oh, je suis bien trop timide pour converser avec des têtes couronnées !","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Pas du tout ! Enfin des gens à mon niveau","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Ils ne m'intimident pas, mais je ne veux pas toutes ces choses guindées, je veux m'amuser !","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","^Les couloirs de Versailles peuvent être intimidants, j'en suis consciente. Mais il serait dommage de laisser un peu de timidité vous privez d'une rencontre avec la reine Marie-Antoinette !","\n","^Fort heureusement, <b>Mademoiselle Montansier</b>, maquilleuse officielle de la reine et propriétaire du Théâtre Montansier, est là pour vous apprendre tout ce dont vous aurez besoin pour vous fondre dans la foule des courtisans sans trembler. Que ce soit les règles de l'étiquette, ou les ragots à savoir absolument, vous serez prêt·e à toute éventualité !","\n",{"#":"IMAGE : https://static.wixstatic.com/media/854513_b10cb89d48944c47a52f6a466baee996~mv2.png"},{"->":"the_end"},{"#f":5}],"c-1":["\n","^Si vous n'êtes pas facilement intimidé·e, il n'y a pas de raison d'attendre plus avant ; laissez-moi vous présenter à la reine ! <b>Marie-Antoinette</b> est constamment à la recherche de nouveaux·elles ami·es pour rejoindre son cercle d'intimes - et trouver des gens de confiance à Versailles n'est pas une mince affaire, croyez-moi !","\n","^Une dernière question, et elle a son importance : connaissez-vous les bases de l'étiquette ?","\n",["ev","str","^Bien sûr. J'ai appris les règles de l'étiquette dès mon jeune âge","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^L'étiquette ? C'est quoi ?","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^J'aurai dû me douter que vous connaissiez tout de l'étiquette rien qu'en admirant votre tenue. Je vous prie de m'excuser d'avoir même posé une telle question.","\n",{"#":"IMAGE : https://static.wixstatic.com/media/854513_56d8ca0d060344e896ffc73ce201be4e~mv2.png"},{"->":"the_end"},{"#f":5}],"c-1":["\n","^L'étiquette est une série de règles qui gouvernent la vie à la cour de Versailles. Ces règles couvrent absolument toutes les situations, que ce soit pour savoir qui est autorisé à s'asseoir en présence de Marie-Antoinette (et sur quoi ils·elles peuvent s'assoir, du repose-pieds à la chaise), comment se tenir à table et, bien entendu, quels égards sont dus à la reine.","\n",["ev","str","^Comment dois-je me comporter devant la reine ? Dites-moi tout !","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Tout cela est terriblement ennuyeux. Je vais plutôt improviser","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^Je suis ravie de voir que vous comptez arriver préparé·e. Le processus est très simple.","\n","^Tout d'abord, les autorités royales doivent vérifier que votre lignée noble remonte au moins à l'an 1399. Ne vous inquiétez pas, le généalogiste royal vous aidera à rassembler les documents nécessaires !","\n","^Une fois cette petite formalité passée, un membre de la cour de vos ami·e·s vous présentera, tout d'abord au roi, puis à la reine.","\n","^Quand vous rencontrerez la reine pour la première fois (tout du moins la première fois \"officielle\"), vous devrez faire la révérence trois fois : une fois dans l'embrasure de la porte ; une fois au milieu de la pièce ; et une dernière fois devant la reine.","\n","^Vous devrez ensuite vous pencher et faire mine d'embrasser le bas de sa robe - attention, ceci n'est qu'une affectation ! La reine repoussera sa robe avec élégance avant que vous ne puissiez y poser les lèvres, en signe de son appréciation. Elle vous parlera ensuite selon son bon vouloir. Répondez à ses questions, mais n'essayez pas de faire durer la conversation ; ceci serait horriblement grossier.","\n","^Une fois que la reine vous signifiera que votre conversation est à son terme, attention ! Vous ne devez jamais tourner le dos à la reine de France. Cela sous-entend que vous devrez sortir de la pièce à reculons, refaisant trois révérences et prenant bien soin de ne pas trébucher - une telle gaffe serait un affront à la reine... sans parler de votre propre humiliation !","\n","^Allons, ne soyez pas nerveux·se ! Quantité de gens sont présentés à la famille royale chaque semaine et la plupart d'entre eux s'en tirent très bien !","\n","^... ceci étant dit, merci de nous dire comment votre présentation s'est passée...","\n",{"#":"IMAGE : https://static.wixstatic.com/media/854513_56d8ca0d060344e896ffc73ce201be4e~mv2.png"},{"->":"the_end"},{"#f":5}],"c-1":["\n","^Être présenté à la reine sans préparation est un choix courageux ; j'espère qu'il jouera en votre faveur !","\n",{"#":"IMAGE : https://static.wixstatic.com/media/854513_dbf96d766cf24d8c9cfadebf89a225a0~mv2.png"},{"->":"the_end"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"c-2":["\n","^Si vous n'êtes pas facilement intimidé·e mais détestez suivre l'étiquette, portez votre regard sur la <b>Duchesse de Polignac</b> sans attendre !","\n","^Bien qu'elle soit la confidente la plus intime de la reine, notre Duchesse ne pense qu'à s'amuser ; elle vous permettra de rejoindre les fêtes les plus débridées... et d'apprendre les potins les plus croustillants !","\n",{"#":"IMAGE : https://static.wixstatic.com/media/854513_5d17de20d1934af98846cb1017ad5499~mv2.png"},{"->":"the_end"},{"#f":5}]}],{"#f":5}],"c-1":["\n","^Votre valeur n'est pas déterminée par votre fortune, en effet ; une vie simple est tout aussi précieuse... mais \"simple\" ne veut pas dire ennuyeuse ! Que diriez-vous d'y ajouter un soupçon d'intrigue ?","\n",["ev","str","^Tant que l'amour est au rendez-vous !","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Si par \"intrigue\", vous parlez de potins, oui !","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Plus que de petites intrigues, je suis à la recherche de quelque chose... de hors du commun !","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","^Qui voudrait son intrigue dépourvue de romance ? Vous devez absolument rencontrer le <b>Marquis de Lafayette</b> ; ce charmant jeune homme n'aime rien de plus que les champs de bataille et les intrigues politiques... mis à part peut-être les bataillons de femmes qu'il courtise avec ardeur ! Il saura vous présenter à toutes les bonnes personnes... à moins que son dévolu ne se porte directement sur vous.","\n",{"#":"IMAGE : https://static.wixstatic.com/media/854513_a4b5565dce324ec8bed20b6688d49342~mv2.png"},{"->":"the_end"},{"#f":5}],"c-1":["\n","^Avoir accès à tous les potins sans s'embêter avec la cour est plus simple qu'il n'y paraît. <b>Mademoiselle Montansier</b>, la maquilleuse officielle de la reine et la propriétaire du grand Théâtre Montansier, est toujours à la recherche de nouveaux talents ; si le monde sulfureux du théâtre ne vous effraie pas, vous serez en mesure de découvrir tous les scandales... et peut-être même d'en créer certains !","\n",{"#":"IMAGE : https://static.wixstatic.com/media/854513_95fcc355e7cd42f6914c406443a97341~mv2.png"},{"->":"the_end"},{"#f":5}],"c-2":["\n","^J'ai bien peur que Versailles ne soit guère l'endroit pour une âme en quête d'extraordinaire... mais l'un de notre univers devrait vous satisfaire !","\n",{"->":"extraordinary"},{"#f":5}]}],{"#f":5}]}],{"#f":1}],"extraordinary":[[{"#":"IMAGE : https://static.wixstatic.com/media/854513_94e5ac2192f84ea0bb1fa07c9c95165e~mv2.png"},"^Que diriez-vous d'une vie faite de voyages, traversant les vastes plaines des États-Unis au début du 20ème siècle, voyageant de ville en ville pour émerveiller les foules curieuses avec les compagnons les plus extraordinaires ? Vous ne vous ennuierez jamais dans notre Amazing Traveling Imaginarium, je peux vous le promettre !","\n","^Mais avant de nous rejoindre sur la route, nous devons déterminer votre rôle. Avez-vous un talent particulier ?","\n","ev","str","^Il se trouve que j'en ai un !","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Je ne crois pas avoir de talent particulier, mais j'aimerais bien !","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Oh, je suis ici pour regarder le spectacle, pas pour en faire partie !","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","^Oui ? Splendide ! Nous sommes toujours à la recherche de nouveaux artistes. Quel est donc votre talent ?","\n",["ev","str","^Je suis incroyablement souple","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Je suis recouvert·e de tatouages","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Je ne ressent pas la douleur","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","^<b>Meribeth Old</b>, aussi connue sous le nom de La Femme Serpent, dû aux mouvements et contorsions incroyables de son corps, est actuellement en tournée en Europe, nous laissant esseulés ! Si vous pouvez tenir dans une valise ou croiser vos jambes sous votre menton, vous avez le potentiel pour devenir l'une de nos vedettes !","\n",{"#":"IMAGE : https://static.wixstatic.com/media/854513_759a4e8dd9b84b489d4b42d46064f883~mv2.png"},{"->":"the_end"},{"#f":5}],"c-1":["\n","^Les tatouages continuent de fasciner les foules, et cela fait un moment que nous essayons de trouver notre propre <b>Betty Broadbent</b> ! Si plus de 90% de votre corps est recouvert de tatouages, nous serions enchantées de faire de vous notre première Merveille Tatouée... et s'il vous manque des tatouages, nous connaissons des artistes qui pourront vous aider à y remédier !","\n",{"#":"IMAGE : https://static.wixstatic.com/media/08d400_ef55de8776aa4feba68a56b30111c00d~mv2.png"},{"->":"the_end"},{"#f":5}],"c-2":["\n","^Un spectacle itinérant à toujours besoin de personnes intrépides. Depuis que notre avaleuse de sabre a dû prendre sa retraire suite à un fâcheux incident, nous essayons désespéremment de lui trouver un·e remplaçant·e. Si la douleur ne vous fait peur, nous avons tout l'équipement nécessaire pour lancer votre numéro !","\n",{"#":"IMAGE : https://static.wixstatic.com/media/08d400_21b95f439ecf49d28dec55aa79a807b7~mv2.png"},{"->":"the_end"},{"#f":5}]}],{"#f":5}],"c-1":["\n","^Pas de soucis, même si vous êtes convaincu·e d'être la personne la plus ordinaire du monde, nos Freaks sauront trouver en vous une graine d'extraordinaire qui ne demande qu'à germer !","\n","^Quelle sorte d'exploit vous attire le plus ?","\n",["ev","str","^J'aime les prouesses sportives","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Je suis fasciné·e par l'occulte","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^J'adore les animaux !","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","^Vous aimez les prouesses sportives ? La femme la plus forte du monde, <b>Lady Hercules</b>, est justement à la recherche de nouveaux élèves. Grâce à elle, vous pourrez soulever trois hommes adultes au-dessus de votre tête en un rien de temps !","\n",{"#":"IMAGE : https://static.wixstatic.com/media/08d400_d73c312cd265465384b6f48abca46551~mv2.png"},{"->":"the_end"},{"#f":5}],"c-1":["\n","^Que vous pensiez déjà être réceptif·ive au paranormal ou que vous vouliez explorer votre potentiel psychique, <b>Madame Delait</b> est la femme (à barbe) qu'il vous faut.","\n","^Notre chère Clémentine a rejoint notre Imaginarium grâce à sa barbe fournie, mais très vite elle se découvrit des talents ésotériques et est devenue notre voyante. Elle a grand besoin d'aide, à la fois pour gérer tout son attirail ésotérique... et pour entretenir sa barbe !","\n",{"#":"IMAGE : https://static.wixstatic.com/media/08d400_b216bcc630094a999c1a094b3dae426f~mv2.png"},{"->":"the_end"},{"#f":5}],"c-2":["\n","^Notre dompteuse intrépide, <b>Mademoiselle Priscilla Kayes</b>, est à la recherche d'un·e apprenti·e pour reprendre son spectacle et lui permettre de se dévouer à sa nouvelle passion, le hula-hoop. Si vous avez des nerfs d'acier et que vous aimez travailler avec des gros chats, elle vous apprendra tout ce qu'il y a à savoir sur le domptage sans violence.","\n",{"#":"IMAGE : https://static.wixstatic.com/media/854513_87c29c683a144bb9b16216a3f6843dcf~mv2.png"},{"->":"the_end"},{"#f":5}]}],{"#f":5}],"c-2":["\n","^Ah, bien sûr. J'ai tendance à oublier que la plupart des gens viennent ici pour regarder nos attractions !","\n","^Eh bien, notre spectacle est sur le point de commencer. Qu'avez-vous le plus envie de voir ?","\n",["ev","str","^Je veux être tenu·e en haleine !","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Je veux connaître mon futur !","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Je veux être époustouflé·e !","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","^Si vous êtes à la recherche de sensations fortes, rendez-vous sous notre chapiteau principal, où l'intrépide <b>Priscilla Kayes</b> s'apprête à rentrer avec ses lions et ses panthères !","\n","^Grande défenseuse des droits des animaux, Melle Kayes contrôle ces créatures sauvages non par la force, mais entièrement par sa voix et son regard ! Plus d'un spectateur s'est évanoui à la vue de cette femme apparemment sans défense faisant face à des gueules béantes et des griffes acérées !","\n",{"#":"IMAGE : https://static.wixstatic.com/media/854513_87c29c683a144bb9b16216a3f6843dcf~mv2.png"},{"->":"the_end"},{"#f":5}],"c-1":["\n","^Ah, le futur ! Comme beaucoup de gens, vous aimeriez savoir ce qu'il vous réserve. <b>Clémentine Delait</b>, notre femme à barbe, est aussi une voyante de renom. Elle peut débloquer les secrets de votre destinée et vous aider à déterminer les chemins qui vous y emmèneront. Mais attention ! Ce qu'elle va vous révéler n'est pas forcément ce que vous voulez entendre...","\n",{"#":"IMAGE : https://static.wixstatic.com/media/08d400_9379e5c321a84432ae5799e2486143b6~mv2.png"},{"->":"the_end"},{"#f":5}],"c-2":["\n","^Vous ne connaissez pas la vraie force avant d'avoir vu <b>Katie Sandwina</b>, aussi connue sous le nom de Lady Hercules, faire tournoyer son mari au-dessus de sa tête comme s'il s'agissait d'une brindille, ou attraper des boulets de canons à mains nues !","\n","^Cela ne vous impressionne pas ? Vous êtes le·la bienvenu·e pour tenter de la défier, mais attention, notre Imaginarium n'accepte aucune responsabilité pour les blessures qu'elle pourrait vous infliger !","\n",{"#":"IMAGE : https://static.wixstatic.com/media/08d400_85a6257fef804bd3b50b1b3aad4f46e4~mv2.png"},{"->":"the_end"},{"#f":5}]}],{"#f":5}]}],{"#f":1}],"danger":[[{"#":"IMAGE : https://static.wixstatic.com/media/08d400_4155002423c948dbaede635577a2206a~mv2.png"},"^Il suffit souvent d'un soupçon de danger pour redécouvrir les joies d'une vie simple, c'est que je dis toujours ! Et l'ère de la Prohibition aux Étas-Unis en offre à foison !","\n","^Question importante : que pensez-vous des activités illégales ?","\n","ev","str","^Je ne juge pas ce que font les autres, mais j'ai assez de jugeote pour ne pas y participer","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Enfreindre la loi, c'est le pied !","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Comment osez-vous ! Je suis un·e honnête citoyen·ne !","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","^Si vous préférez garder vos distances pendant que les gangsters font leurs affaires, ça n'est pas un problème. Notre speakeasy a besoin de clients, mais il a aussi besoin d'artistes !","\n","^Avec le quoi êtes-vous le plus à l'aise : votre corps, ou votre voix ?","\n",["ev","str","^Je chante plutôt bien","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Je n'ai pas de problème pour montrer mon corps","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Je suis plutôt du genre comique","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","^Je suis sûre que vous chantez encore mieux que vous ne le dites, ne soyez pas modeste. Et sous la tutelle de l'inimitable <b>Mae West</b>, vous ne manquerez pas de devenir une vraie star !","\n",{"#":"IMAGE : https://static.wixstatic.com/media/08d400_60146b1c6a43499aaf9ea735b0453dde~mv2.png"},{"->":"the_end"},{"#f":5}],"c-1":["\n","^Soyons honnêtes : dans un cabaret, mieux vaut ne pas être pudique. Et les fondements du Burlesque sont la sensualité et l'humour, quelle que soit votre morphologie !","\n","^<b>Gipsy Rose Lee</b> vous apprendra tout ce dont vous avez besoin pour créer le numéro burlesque parfait.","\n",{"#":"IMAGE : https://static.wixstatic.com/media/08d400_87b2f6ab546646c5aa9ba352bde5efc1~mv2.png"},{"->":"the_end"},{"#f":5}],"c-2":["\n","^Oh, un·e comique ! Votre sens du timing est parfait - notre speakeasy ne se contente pas d'offrir chansons et stripteases ; nos clients aiment aussi rigoler !","\n","^<b>Lou Costello</b>, notre comique le plus prometteur, est justement à la recherche d'un·e partenaire pour créer un nouveau numéro. Ce pourrait être vous ! Mais vous feriez mieux de vous dépêcher - j'ai entendu dire qu'il s'est rapproché d'un certain Bud Abbott...","\n",{"#":"IMAGE : https://static.wixstatic.com/media/08d400_ea095a71c38e42959c9dada256c2a885~mv2.png"},{"->":"the_end"},{"#f":5}]}],{"#f":5}],"c-1":["\n","^Soyons honnêtes : enfreindre la loi a ses charmes... tant que vous ne vous faites pas prendre ! Et par ici, il y a de nombreuses opportunités de faire des affaires plus ou moins légales (surtout moins).","\n","^Préfériez-vous travailler pour quelqu'un, ou vous mettre à votre compte ?","\n",["ev","str","^Je serais mon propre patron","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^J'aime obéir aux ordres, c'est moins stressant.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n","^Vous avez effectivement l'air de pouvoir monter votre propre empire criminel, si je peux me permettre cette réflexion. Mais les empires ont besoin de fondations.","\n","^Je vous suggère de vous spécialiser dans l'alcool frelaté. C'est la grande mode en ces temps de restriction, et le gang des <b>Frères Genna</b> est constamment à la recherche de nouveaux collaborateurs. Ils vous fournissent même les alambics et les ingrédients !","\n",{"#":"IMAGE : https://static.wixstatic.com/media/854513_58fec6a64ff64e57bbe43fd012d19053~mv2.png"},{"->":"the_end"},{"#f":5}],"c-1":["\n","^Le métier de sous-fifre est une noble profession ; après tout, c'est vous qui faites vraiment tourner les empires criminels !","\n","^Il se trouve justement que le propriétaire de notre cabaret, <b>Legs Diamond</b>, est un mafioso avec un gros potentiel et un <i>très</i> gros besoin d'hommes/femmes de mains, du genre qui ne lui tireront pas dans le dos à la première occasion venue.","\n",{"#":"IMAGE : https://static.wixstatic.com/media/08d400_3454170104cc4f289785f5823d759ec6~mv2.png"},{"->":"the_end"},{"#f":5}]}],{"#f":5}],"c-2":["\n","^Mais bien sûr, il ne vous viendrait jamais à l'idée d'enfreindre la loi ! Je suis navrée si j'ai semblé sous-entendre le contraire.","\n","^Eh bien, si vous avez envie d'un peu de danger mais désirez rester du \"bon\" côté de la loi, je pense qu'un voyage au Far West sera plus approprié.","\n",{"->":"adventure"},{"#f":5}]}],{"#f":1}],"the_end":[[{"#":"IMAGE : https://static.wixstatic.com/media/08d400_eb64f8e3464f4f258b909ab607a75b28~mv2.png"},{"#":"IMAGE : https://static.wixstatic.com/media/854513_f5f056425c974e879d6625fba098306a~mv2.png"},"^Merci de nous avoir rejoints pour cette aventure ! Vous savez désormais quel aurait pu être votre destin si vous étiez né·e à une autre époque... et pourquoi pas en faire l'expérience dans la vraie vie ? Grâce à nos expériences immersives, voyagez dans le temps et forgez votre propre légende !","\n","^Pour en savoir plus, <a href=\"https://www.eatthecakestudio.com/fr/services\" target=\"_blank\">c'est par ici...</a>","\n","ev","str","^En fait, j'aimerais bien changer mes choix...","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Merci, j'ai passé un très bon moment !","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["\n",{"#":"CLEAR"},{"->":"first_choice"},{"#f":5}],"c-1":["\n",{"->":"final_end"},{"#f":5}]}],{"#f":1}],"final_end":["^A très bientôt !","\n","done",{"#f":1}],"start_EN":["^The English version of this game is in the works! In the meantime, if you want to learn more about our universes, <a href=\"https://www.eatthecakestudio.com/services\" target=\"_blank\">click here!</a>","\n",{"#":"IMAGE : https://static.wixstatic.com/media/854513_f396758dacd546d6a3ce4eaf90726843~mv2.png"},"^We'll see you very soon!","\n","done",{"#f":1}],"#f":1}],"listDefs":{}};