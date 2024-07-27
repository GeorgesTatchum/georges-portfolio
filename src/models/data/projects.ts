import { ProjectType } from "../project_type";

export const projects_data: ProjectType[] = [
    {
        'title': 'My portfolio',
        'type': 'web site',
        'logo': '/portfolio/logo.png',
        'introduction': {
            "fr": "Ce portfolio, conçu et développé par moi-même, présente mon travail et mes réalisations. Certaines de mes réalisations ne sont pas incluses en raison de leur nature confidentielle.",
            "en": "This portfolio, designed and developed by myself, presents my work and achievements. Some of my work is not included because of its confidential nature."
        },
        'resume': {
            "fr": "Portfolio développé avec Next.js, incluant un système de messagerie via une route API avec Nodemailer, et déployé sur le domaine lewistina.com via Vercel. Bien que ce projet puisse être perçu comme un simple site vitrine nécessitant uniquement une maquette et une intégration frontale, il comprend également un formulaire de contact permettant l'envoi automatique d'emails, ce qui en fait un projet plus complet. Les tâches réalisées incluent :\nIntégration full-stack avec Next.js\nDéploiement sur Vercel\nConfiguration du DNS pour le nom de domaine",
            "en": "Portfolio developed with Next.js, including a messaging system via an API route with Nodemailer, and deployed on the lewistina.com domain via Vercel. Although this project may be perceived as a simple showcase site requiring only a mock-up and front-end integration, it also includes a contact form enabling automatic emailing, making it a more complete project.  Tasks completed include:\nFull-stack integration with Next.js\nDeployment on Vercel\nDNS configuration for domain name"
        
        },
        'url': [
            {
                "name": "website",
                "link": "/"
            }
        ],
        'images': {
            'cover': "",
            'others': [
                
            ]
        },
        'stack': [
            [
                    "nodejs", "vercel"
            ],
           [
                    "Nextjs", "typescript", "tailwind"
            ],
            [
            ],
            
        ]
    },
    {
        'title': 'revotask',
        'type': 'web app',
        'logo': '/revo/logo.jpeg',
        'introduction': {
            "fr": "Ce projet vise à développer une application web (dans un premier temps) pour la gestion des interactions entre professionnels. Le développement est réalisé selon une approche agile.",
            "en": "The aim of this project is to develop a web application (initially) for managing interactions between professionals. Development is being carried out using an agile approach."
        },
        'resume': {
            "fr": "Conception d'une application dont le but est de transformer la gestion de vos communications professionnelles à l'aide de l'intelligence artificielle. J'occupais la fonction de développeur backend. Mes responsabilités incluaient :\nDéveloppement d'un microservice de file d'attente et de planification de tâches informatiques,\nImplémentation du mode collaboratif entre utilisateurs,\nDéveloppement de fonctionnalités liées à la sécurité, ainsi que diverses autres fonctionnalités et correctifs.",
            "en": "Design of an application to transform the management of your business communications using artificial intelligence. I was a backend developer. My responsibilities included:\nDevelopment of a micro service for queuing and scheduling IT tasks,\nImplementation of a collaborative mode between users,\nDevelopment of security-related functionalities, as well as various other functionalities and patches."
        
        },
        'url': [
            {
                "name": "website",
                "link": "https://revotask.com/"
            }
        ],
        'images': {
            'cover': "/revo/cover.png",
            'others': [
                
            ]
        },
        'stack': [
            [
                    "python", "fastapi", "postgresql", "redis", "celery", "rabbitmq", "flower", "gcp", "docker", "nginx"
            ],
           [
                    "flutter"
            ],
            [
            ],
            
        ]
    },{
        'title': 'factauto',
        'type': 'web/mobile app',
        'logo': '/factauto/Logo_FactAuto.png',
        'introduction': {
            "fr": "Ce projet vise à développer une application de facturation disponible sur plusieurs plateformes, incluant une application web ainsi qu'une application mobile hybride compatible avec Android et iOS. Ce projet est mis en œuvre selon une approche agile.",
            "en": "This project aims to develop an invoicing application available on several platforms, including a web application as well as a hybrid mobile application compatible with Android and iOS. This project is implemented using an agile approach. This method allows steps to be gradually adjusted and modified throughout the design and development of the project, thus promoting its continuous evolution."
        },
        'resume': {
            "fr": "Conception d'une application d'invoicing avec assistance à la comptabilité, utilisant Next.js pour le front-end, Python et Node.js pour le back-end, ainsi que Flutter pour le mobile. Le suivi de déploiement de cette application est basé sur des pipelines GitLab CI/CD. Mes rôles comprenaient les fonctions de DevOps, développeur full-stack et administrateur réseau. Mes responsabilités incluaient :\n \tDéfinition et mise en place de l'architecture globale des services back-end et mobile, en veillant au choix judicieux des technologies\n \tAnalyse conceptuelle et implémentation de toutes les fonctionnalités côté back-end, ainsi que l'intégration de la majorité des interfaces mobiles\n \tMise en place des pipelines CI/CD pour les services back-end et web\n \tConfiguration réseau et sécurité du serveur de déploiement\n \tConfiguration du DNS",
            "en": "Design of an invoicing application with accounting assistance, using Next.js for the front-end, Python and Node.js for the back-end, and Flutter for mobile. Deployment monitoring for this application is based on GitLab CI/CD pipelines. My roles included DevOps, full-stack developer and network administrator. My responsibilities included:\n \tDefinition and implementation of the overall architecture of the back-end and mobile services, ensuring the right choice of technologies\n \tConceptual analysis and implementation of all back-end functionality, as well as integration of the majority of mobile interfaces\n \tImplementation of CI/CD pipelines for back-end and web services\n \tNetwork and security configuration of the deployment server\n \tDNS configuration"
        
        },
        'url': [
            {
                "name": "website",
                "link": "https://www.factauto.com/en"
            }
        ],
        'images': {
            'cover': "/factauto/FactAuto_introduicing.png",
            'others': [
                "/factauto/Visuel_Doc_FactAuto.png", "/factauto/Visuel_App_FactAuto.png"
            ]
        },
        'stack': [
            [
                    "python", "fastapi", "postgresql", "redis", "celery", "rabbitmq", "flower", "gitlab-ci/cd", "docker", "docker-swarm", "caddy"
            ],
           [
                    "Nextjs", "typescript", "nodejs", "tailwind"
            ],
            [
                    "flutter",
            ],
            
        ]
    },
    {
        'title': 'chezbio',
        'type': 'Mobile app',
        'logo': '/chezbio/logo.webp',
        'introduction': {
            "fr": "Ce projet en équipe consiste en une application mobile d'achat de produits naturels, compatible avec Android et iOS. Le développement de cette application est réalisé selon une approche agile",
        "en": "This team project consists of a mobile application for buying natural products, compatible with Android and iOS. This application is being developed using an agile approach."

        },
        'resume': {
            "fr": "Chezbio met à votre disposition un catalogue complet de produits bio de première qualité, incluant des aliments savoureux, des cosmétiques naturels et des produits ménagers respectueux de l'environnement. J'étais en charge de l'intégration mobile des interfaces utilisateurs, adaptées aux différents formats (mobile, tablette et desktop).",
            "en": "Chezbio offers a comprehensive catalogue of top-quality organic products, including tasty foods, natural cosmetics and environmentally-friendly household products. I was in charge of the mobile integration of the user interfaces, adapted to the different formats (mobile, tablet and desktop)."
    
        },
        'url': [
            {
                "name": "play-store",
                "link": "https://play.google.com/store/apps/details?id=com.chezbio.app&hl=fr"
            },

        ],
        'images': {
            'cover': "/chezbio/cover.webp",
            'others': [
                "/chezbio/1.webp", "/chezbio/2.webp", "/chezbio/3.webp"
            ]
        },
        'stack': [
            [
                    "python", "fastapi", "postgresql", "gitlab", "postgresql", "celery", "redis", "minio", "docker", "jenkins"
            ],
           [

            ],
            [
                "flutter"
            ],
            
        ]
    },
    {
        'title': 'Carla+ Curl',
        'type': 'web & mobile app',
        'logo': '/carla/logo.webp',
        'introduction': {
            "fr": "Ce projet en équipe est une application de mise en relation entre utilisateur tier et professionnel de la coiffure mixte disponible sur plusieurs plateformes, incluant une application web, un dashboard ainsi qu'une application mobile hybride compatible avec Android et iOS. Ce projet est mis en œuvre selon une approche agile.",
            "en": "This team project is an application for connecting third-party users and mixed hairdressing professionals available on several platforms, including a web application, a dashboard and a hybrid mobile application compatible with Android and iOS. This project is implemented using an agile approach."
        },
        'resume': {
            "fr": "Conception en équipe d'une application de mise en relation entre utilisateurs tiers et professionnel de la coiffure mixte, dont le souci est d'entretenir et d'éduquer sur tout ce qui concerne l'entretien de la chevelure. J'ai participé à l'intégration web et mobile de certaines interfaces utilisateur et assuré la maintenance de l'application.",
            "en": "Team design of an application connecting third-party users and mixed hairdressing professionals, whose concern is to maintain and educate on everything related to hair care. I participated in the web and mobile integration of certain user interfaces and ensured the maintenance of the application."
        },
        'url': [
            {
                "name": "website",
                "link": "https://www.carlaplus.com/en"
            }
        ],
        'images': {
            'cover': "/carla/cover.png",
            'others': [
                "/carla/1.png", "/carla/2.png", "/carla/3.png"
            ]
        },
        'stack': [
            [
                "python", "fastapi", "gitlab", "postgresql", "celery", "redis", "minio", "docker", "swarmpit", "caddy"
            ],
           [
            "Nextjs", "typescript", "tailwind"

            ],
            [
                "Flutter"
            ],
            
        ]
    },
    {
        'title': 'Cameroun In Pocket',
        'type': 'mobile app',
        'logo': '/cp/Logo_CP_Final-05.png',
        'introduction': {
            "fr": "Ce projet vise à développer une application mobile multi plateforme qui vise à promouvoir la culture camerounaise.",
            "en": "The aim of this project is to develop a multi-platform mobile application to promote Cameroonian culture."
        
        },
        'resume': {
            "fr": "Conception d'une application de mise en relation et de vente entre des prestataires de services et des utilisateurs de passage au Cameroun (touristes, diaspora, etc...). Application mobile hybride avec Flutter.",
            "en": "Design of an application for connecting and selling between service providers and transient users in Cameroon (tourists, diaspora, etc.). Hybrid mobile application with Flutter."
        },
        'url': [
            {
                "name": "in_process",
                "link": "#"
            }
        ],
        'images': {
            'cover': "/cp/Mockups_CP_for_Instagram_First_Screen.png",
            'others': [
                "/cp/cp-0.png", "/cp/cp-1.png", "/cp/cp-2.png"
            ]
        },
        'stack': [
            [
                    "python", "flask", "postgresql", "gitlab-ci/cd", "docker",
            ],
           [
            ],
            [
                    "flutter",
            ],
            
        ]
    },
    {
        'title': 'Trovavia',
        'type': 'web & mobile app',
        'logo': '/trovavia/logo.png',
        'introduction': {
            "fr": "Ce projet en équipe est une application de réservation de voyage disponible sur plusieurs plateformes, incluant une application web, un dashboard ainsi qu'une application mobile hybride compatible avec Android et iOS. Ce projet est mis en œuvre selon une approche agile.",
            "en": "This team project is a travel booking application available on several platforms, including a web application, a dashboard and a hybrid mobile application compatible with Android and iOS. The project is being implemented using an agile approach."
        },
        'resume': {
            "fr": "Conception en équipe d'une application de réservation de voyage multi-modal. J'étais en charge de l'implémentation backend des fonctionnalités du tableau de bord, notamment la gestion des utilisateurs, l'enregistrement et la gestion des compagnies, ainsi que l'élaboration des statistiques et leur exportation sous différents formats (Excel, PDF, etc.). En outre, j'ai participé à l'intégration web et mobile de certaines interfaces utilisateur et assuré la maintenance de l'application",
            "en": "Team design of a multi-modal travel booking application. I was responsible for the backend implementation of the dashboard functionalities, including user management, company registration and management, as well as compiling statistics and exporting them in various formats (Excel, PDF, etc.). I also took part in the web and mobile integration of certain user interfaces and maintained the application."
        },
        'url': [
            {
                "name": "website",
                "link": "https://www.trovavia.com/app/home"
            }
        ],
        'images': {
            'cover': "/trovavia/cover.png",
            'others': [
            ]
        },
        'stack': [
            [
                "python", "flask", "gitlab", "postgresql", "celery", "redis", "minio", "docker", "swarmpit", "caddy"
            ],
           [
            "Reactjs", "typescript", "nodejs", "React-Material-ui"

            ],
            [
                "Flutter"
            ],
            
        ]
    },
    {
        'title': 'Cooltchop',
        'type': 'web & mobile app',
        'logo': '/cooltchop/logo.jpg',
        'introduction': {
            "fr": "Ce projet en équipe est une application   disponible sur plusieurs plateformes, incluant une application web ainsi qu'une application mobile hybride compatible avec Android et iOS.",
            "en": "This team project is an application available on several platforms, including a web application and a hybrid mobile application compatible with Android and iOS."
        },
        'resume': {
            "fr": "Conception en équipe d'une application de mise en relation entre l'utilisateur tiers et les restaurants à proximité pour faciliter les commandes de leurs repas. J'étais en charge de la maintenance de cette dernière, quelle soit corrective ou préventive notamment backend comme frontend",
            "en": "Working as part of a team, I designed an application to put third-party users in touch with nearby restaurants to make it easier for them to order their meals. I was in charge of both corrective and preventive maintenance, particularly on the backend and frontend."
        },
        'url': [
            {
                "name": "website",
                "link": "https://www.cooltchop.com/fr"
            },
            {
                "name": "appstore",
                "link": "https://apps.apple.com/cy/app/cooltchop/id1565926273"
            },
            {
                "name": "play-store",
                "link": "https://play.google.com/store/apps/details?id=com.kevmax.cooltchop"
            },
        ],
        'images': {
            'cover': "/cooltchop/cover.png",
            'others': [
                "/cooltchop/1.png", "/cooltchop/2.png"
            ]
        },
        'stack': [
            [
                "php", "php-slim", "mysql", "nginx"
            ],
           [
            "html", "css", "bootsrap"

            ],
            [
                "Flutter"
            ],
            
        ]
    },
]