export const dummyData = {
  events: {
    1: {
      name: "技能五輪全国大会",
      map_image: "/images/map1.jpg",
      spots: [
        {
          id: 1,
          name: "受付",
          description: "総合受付です。案内図をお受け取りください。",
          location_x: 100,
          location_y: 150,
          map_image: ["/api/data/images/01.jpg", "/api/data/images/02.jpg"]
        },
        {
          id: 2,
          name: "展示エリアA",
          description: "メイン展示エリアです。",
          location_x: 300,
          location_y: 250,
          map_image: ["/api/data/images/03.jpg", "/api/data/images/01.jpg"]
        }
      ]
    }
  }
};