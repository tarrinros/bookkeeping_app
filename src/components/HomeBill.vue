<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">{{'Home_CurrencyCount' | localize}}</span>

        <p
          v-for="cur of currencies"
          :key="cur"
          class="currency-line">
          <span>{{getCurrency(cur) | currency(cur)}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rates'],
  data: () => ({
    currencies: ['RUB', 'USD', 'EUR']
  }),
  computed: {
    base () {
      return this.$store.getters.info.bill / (this.rates['RUB'] / this.rates['EUR'])
    }
  },
  methods: {
    getCurrency(currency) {
      return Math.floor(this.base * this.rates[currency])
    }
  }
}
</script>

// Введите имя
// Обновить
// Категории
// Категорий пока нет
// Добавить категорию
// Создать
// Обновить
// Название
// Введите название категории
// Лимит
// Минимальная величина
// Категория была создана
// Выберите категорию
// Планирование
// Превышение на
// Осталось
// Сумма
// Дата
// Категория
// Тип
// Открыть
// "Home_Currency at the account":"Счет в валюте"
// Курс валют
// Валюта
// Курс
// Дата

// Описание
// Сумма
// Записи с таким ID:  не найдено

// История записей
// Записей пока нет.
// Добавьте первую
// Назад
// Вперед
// Траты по категориям

// Домашняя бухгалтерия
// Поле Email не должно быть пустым
// Неправильный формат Email
// Пароль
// Пароль не может быть пустым
// Пароль не может быть короче символов. Сейчас он
// Войти
// Нет аккаунта?
// Зарегистрироваться

// Расход
// Введите название описания

// "Name": "Имя",
// "NameValidationLength": "Поле Имя не должно быть пустым",
// "AgreeTerms": "С правилами согласен",
// "SignUp": "Зарегистрироваться",
// "Have account": "Уже есть аккаунт?",
// "Login": "Войти!"