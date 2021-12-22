function light_control(name, device_in, control_in, device_out, control_out) {
	defineVirtualDevice(name, {
		title: name,

		cells: {
          	TOGGLE_switch : {
				type : "pushbutton",
				value : false
			},
          	switch_fb : {
            	type : "switch",
				value : false
            },
		}
	});



	defineRule(name + "_switch_control", {
		whenChanged: device_in + "/" + control_in,
		then: function (newValue, devName, cellName) {
			if ( newValue > 0) {
				if (dev[device_out][control_out] == 0) {
					dev[device_out][control_out] = 1;
                  	dev[name]["switch_fb"] = 1;
				} else {
					dev[device_out][control_out] = 1;
                  	dev[name]["switch_fb"] = 1;
				}
			}
		}
	});
//changed
	defineRule(name + "_switch_control_iridium", {
		whenChanged: name + "/TOGGLE_switch",
		then: function (newValue, devName, cellName) {
          		if (dev[device_out][control_out] == 0) {
					dev[device_out][control_out] = 1;
                  	dev[name]["switch_fb"] = 1;
				} else {
					dev[device_out][control_out] = 0;
					dev[name]["switch_fb"] = 0;
				}
            }
	});

  	defineRule(device_out + "/" + control_out + "_fb", {
		whenChanged: device_out + "/" + control_out,
		then: function (newValue, devName, cellName) {
			if (dev[device_out][control_out] == 1) {
              	dev[name]["switch_fb"] = 1;
			} else {
            	dev[name]["switch_fb"] = 0;
            }
            //TODO: Забирать из Scene control флаг о вызове сцен, проверять, была ли вызвана сцена. Если была, фб не сбрасывать.
            /*
            if (control_out == "EXT2_R3A1" || control_out == "EXT2_R3A2" || control_out == "EXT2_R3A3") {
            	dev["at_kitchen_scene_controller"]["scene1_call_fb"] = 0;
                dev["at_kitchen_scene_controller"]["scene2_call_fb"] = 0;
              	dev["at_kitchen_scene_controller"]["scene3_call_fb"] = 0;
                dev["at_kitchen_scene_controller"]["scene4_call_fb"] = 0;
            } else if (control_out == "EXT2_R3A7" || control_out == "EXT2_R3A8" || control_out == "EXT3_R3A1") {
                dev["at_room_scene_controller"]["scene1_call_fb"] = 0;
                dev["at_room_scene_controller"]["scene2_call_fb"] = 0;
              	dev["at_room_scene_controller"]["scene3_call_fb"] = 0;
                dev["at_room_scene_controller"]["scene4_call_fb"] = 0;
            }
            */
		}
	});
}

setTimeout(function() {light_control("gr1_light", "wb-gpio", "EXT5_IN1", "wb-gpio", "EXT2_R3A1"); }, 1000);	//Гардеробная
setTimeout(function() {light_control("gr3_light", "wb-gpio", "EXT5_IN3", "wb-gpio", "EXT2_R3A2"); }, 1200);	//Спальня пом6 точки
setTimeout(function() {light_control("gr4_light", "wb-gpio", "EXT5_IN4", "wb-gpio", "EXT2_R3A3"); }, 1600);	//Гостевой санузел точки
//setTimeout(function() {light_control("gr5_light", "wb-gpio", "EXT5_IN5", "wb-gpio", "EXT2_R3A4"); }, 2000);	//Гостевая настеные светильники
//setTimeout(function() {light_control("gr6_light", "wb-gpio", "EXT5_IN6", "wb-gpio", "EXT2_R3A5"); }, 2100);	//Коридор люстры
//setTimeout(function() {light_control("gr7_light", "wb-gpio", "EXT5_IN1", "wb-gpio", "EXT3_R3A6"); }, 2200);	//Деская нет вывода
setTimeout(function() {light_control("gr8_light", "wb-gpio", "EXT6_IN12", "wb-gpio", "EXT2_R3A7"); }, 2300);	//Детская люстра
setTimeout(function() {light_control("gr9_light", "wb-gpio", "EXT5_IN9", "wb-gpio", "EXT2_R3A8"); }, 3000);	  // Ванная подсветка зеркала
setTimeout(function() {light_control("gr10_light", "wb-gpio", "EXT5_IN10", "wb-gpio", "EXT3_R3A1"); }, 4000);	  // Ванная основной свет
//setTimeout(function() {light_control("gr12_light", "wb-gpio", "EXT5_IN12", "wb-gpio", "EXT1_ON1"); }, 4300);	  // кухня люстра справа
//setTimeout(function() {light_control("gr11_light", "wb-gpio", "EXT5_IN11", "wb-gpio", "EXT3_R3A3"); }, 4500);	  // кухня слева над столом
setTimeout(function() {light_control("gr13_light", "wb-gpio", "EXT5_IN13", "wb-gpio", "EXT3_R3A4"); }, 4700);	  // Лоджия в кухне свет
setTimeout(function() {light_control("gr14_light", "wb-gpio", "EXT5_IN14", "wb-gpio", "EXT3_R3A5"); }, 5000);	  // Лоджия в спальне свет
setTimeout(function() {light_control("gr15_light", "wb-gpio", "EXT6_IN1", "wb-gpio", "EXT3_R3A6"); }, 5300);	  // Санузел гостевой подсветка зеркала
setTimeout(function() {light_control("gr16_light", "wb-gpio", "EXT6_IN2", "wb-gpio", "EXT3_R3A7"); }, 5500);	  // Кухня подсветка рабочей зоны
setTimeout(function() {light_control("gr20_light", "wb-gpio", "EXT5_IN8", "wb-gpio", "EXT3_R3A8"); }, 6000);	  // Детская светодиодная подсветка 
setTimeout(function() {light_control("gr18_light", "wb-gpio", "EXT6_IN8", "wb-mio-gpio_138:1", "K15"); }, 7200);	  // Спальня гр18 подсветка
//setTimeout(function() {light_control("gr2_light", "wb-gpio", "EXT6_IN10", "wb-mio-gpio_138:1", "K16"); }, 7500);	  // Коридор подсветка
//setTimeout(function() {light_control("gr19_light", "wb-gpio", "EXT6_IN7", "wb-mio-gpio_138:1", "K2"); }, 7700);	  // Кухня подсветка
//setTimeout(function() {light_control("gr17_light", "wb-gpio", "EXT6_IN9", "wb-mio-gpio_138:1", "K1"); }, 8000);	  // Кухня точки