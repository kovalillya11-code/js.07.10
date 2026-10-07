const pc = {
    "Процесор": "Не вказано",
    "Відеокарта": "Не вказано",
    "Оперативна пам'ять": "Не вказано"
};

console.log("--- Крок 1: Введення значень для існуючих характеристик ---");


for (let key in pc) {
    const value = prompt(`Введіть значення для характеристики "${key}":`);
    pc[key] = value ? value : "Не вказано";
}

console.log("\n--- Поточні характеристики ПК ---");
for (let key in pc) {
    console.log(`${key}: ${pc[key]}`);
}

console.log("\n--- Крок 2: Зміна характеристики ---");
const ToChange = prompt("Яку характеристику ви хочете змінит? ( Процесор, Відеокарта, Оперативна пам'ять)");

if (ToChange && ToChange in pc) {
    const newValue = prompt(`Введіть НОВЕ значення для "${ToChange}":`);
    pc[ToChange] = newValue ? newValue : "Не вказано";
    console.log("\n--- Оновлені характеристики ПК ---");
    for (let key in pc) {
        console.log(`${key}: ${pc[key]}`);
    }
} else {
    console.log("Такої характеристики не існує у словнику або введення було скасовано.");
}
