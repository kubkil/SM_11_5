$(function(){

  function Button(text) {
    this.text = text || 'Hello';
  }

  // $ - wybór danego elementu

  Button.prototype.create = function() { //metoda przypisywana do funkcji 
    const self = this;
    this.$element = $('<button>');
    this.$element.text(this.text);
    this.$element.click(function() {
      alert(self.text);
    });
    $('body').append(this.$element);
  }

  const btn1 = new Button('raz dwa trzy');
  btn1.create();

}); // end $(document).ready()