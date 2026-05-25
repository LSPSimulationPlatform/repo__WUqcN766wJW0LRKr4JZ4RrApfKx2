// Определяем компонент ProductCreate
function ProductCreate() {

  // Определяем стили для кнопки "Назад на главную страницу"
  const backButtonStyle = {
    marginTop: 15,              // Пространство над кнопкой
    marginLeft: 15,             // Пространство слева
    backgroundColor: "gray",    // Серый цвет фона
    color: "white",             // Белый цвет текста
    padding: "10px 20px",       // Отступы: 10px сверху/снизу, 20px слева/справа
    border: "none",             // Без границы
    borderRadius: 5,            // Закругленные углы
    cursor: "pointer",          // Курсор меняется на указатель при наведении
    fontSize: 16,               // Размер текста
  };

  // JSX, возвращаемый компонентом
  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",        // Светло-серый фон для контейнера формы
        width: 600,                        // Устанавливаем фиксированную ширину формы
        borderRadius: 5,                   // Закругленные углы для блока
        padding: "20px 40px 20px 20px",    // Отступы: сверху/справа/снизу/слева
        margin: "10px auto",               // Вертикальные отступы и горизонтальное центрирование
        fontFamily: "Arial, sans-serif",   // Используем шрифт Arial
      }}
    >

      <h1 style={{ color: "blue" }}>Страница создания продукта</h1>

      <label>Название продукта</label><br />
      <input
        type="text"
        placeholder="Название продукта"
        style={{
          width: "100%",           // Полная ширина ввода
          padding: 8,              // Внутреннее пространство
          marginBottom: 15         // Пространство под вводом
        }}
      /><br />

      <label>Код продукта</label><br />
      <input
        type="text"
        placeholder="Код продукта"
        style={{
          width: "100%",           // Полная ширина
          padding: 8,              // Внутреннее пространство
          marginBottom: 15         // Нижний отступ
        }}
      /><br />

      <label>Дата выпуска</label><br />
      <input
        type="date"
        style={{
          width: "100%",           // Полная ширина
          padding: 8,              // Отступы внутри ввода
          marginBottom: 15         // Отступ под вводом
        }}
      /><br />

      <label>Категория продукта</label><br />
      <select
        style={{
          width: "100%",           // Полная ширина выпадающего списка
          padding: 8,              // Отступы для текстового пространства
          marginBottom: 15         // Пространство под выпадающим списком
        }}
      >
        <option>Электроника</option>
        <option>Одежда</option>
        <option>Книги</option>
        <option>Дом и кухня</option>
        <option>Игрушки и игры</option>
        <option>Здоровье и красота</option>
      </select><br />

      <label>Описание продукта</label><br />
      <textarea
        placeholder="Описание продукта"
        rows={4}
        style={{
          width: "100%",           // Занимает всю ширину контейнера
          padding: 8,              // Внутреннее пространство
          marginBottom: 20         // Пространство под текстовым полем
        }}
      ></textarea><br />

      <button
        style={{
          backgroundColor: "blue",   // Синий фон
          color: "white",            // Белый текст
          padding: "10px 20px",      // Отступы внутри кнопки
          border: "none",            // Без границы
          borderRadius: 5,           // Закругленные углы
          cursor: "pointer",         // Указатель при наведении
          fontSize: 16               // Размер шрифта
        }}
      >
        Сохранить
      </button>

      <button style={backButtonStyle}>
        Назад на главную страницу
      </button>

    </div>
  );
}

// Экспортируем компонент, чтобы его можно было импортировать в других файлах
export default ProductCreate;

  