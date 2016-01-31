define([], function() {
    var ProjectModel = [{
        id: "musicbattl",
        name: "Music Battl",
        description: "Personal project I developed for research. It uses SignalR for the realtime voting system, WebApi for the service layer and SoundCloud API. Future plans for this project is to develop the mobile version.",
        url: "http://musicbattl.azurewebsites.net/",
        tech: {
            frontend: ["Javascript/jQuery", "Sass", "Handlebars", "Backbone", "Grunt", "SoundCloud API", "Design"],
            backend: ["C#", "WEBAPI", "DI (Ninject)", "SQL Server", "SignalR", "Azure (hosting)"]
        },
        preview: "/images/gallery1.jpg",
        gallery: ["/images/gallery1.jpg", "/images/musicbattl2.jpg", "/images/musicbattl3.jpg", "/images/musicbattl4.jpg"]
    }, {
        id:"sbp",
        name: "30° CONGRESSO BRASILEIRO DE PATOLOGIA",
        description: "Responsible of all Javascript and Asp.Net MVC development of the website and voting/application submission system.",
        url: "http://congressodepatologia.org.br/",
        tech: {
            frontend: ["Javascript/jQuery", "Sass", "Backbone", "Grunt", "Foundation"],
            backend: ["C#", "MVC (.NET)", "SQL Server", "Azure (hosting)"]
        },
        preview: "/images/sbp.jpg",
        gallery: ["/images/sbp.jpg", "/images/congresso2.jpg", "/images/congresso3.jpg", "/images/congresso4.jpg"]
    }, {
        id: "comunidade",
        name: "Comunidade Mais Divertido",
        description: "Isometric social game development (old flash days), unfortunately not online anymore. Developed while I worked at Tribo Interactive.",
        url: "",
        tech: {
            frontend: ["Actionscript 3", "Plain Isometric engine"],
            backend: ["FluorineFx", "SQL Server"]
        },
        preview: "/images/cidade_1.jpg",
        gallery: ["/images/cidade_1.jpg", "/images/cidade_3.jpg", "/images/quintal_3.jpg", "/images/quintal_5.jpg"]
    }];

    return ProjectModel;
});
