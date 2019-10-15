<template>
  <div>
    <div class="page-title">
      <h3>Профиль</h3>
    </div>

    <form class="form">
      <div class="input-field">
        <input
            id="description"
            type="text"
        >
        <label for="description">Имя</label>
        <span
              class="helper-text invalid">name</span>
      </div>

      <div class="switch">
        <label>
          Off
          <input type="checkbox">
          <span class="lever"></span>
          On
        </label>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Обновить
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>
