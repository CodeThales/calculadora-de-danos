from flask import Flask, render_template
from random import randint
app = Flask(__name__)

@app.route('/')
def home():
  inimigos = [
    {
      'vida': randint(10, 100),
      'nome': 'Mr. Satan',
      'foto': 'static\images\MrSatan.png'
    },
    {
      'vida': randint(10, 100),
      'nome': 'Majin Boo',
      'foto': 'static\images\MajinBuuAntesDoCSS.png'
    },
    {
      'vida': randint(10, 100),
      'nome': 'Frieza',
      'foto': 'static\images\Frieza.png'
    }
  ]

  armas = [
   {
      'dano': randint(10 ,100),
      'nome': 'Ryu Ken',
      'foto': 'static\images\Ryuken.jpg'
    },
    {
      'dano': randint(10, 100),
      'nome': 'Kamehameha',
      'foto': 'static\images\kamehameha.jpg'
    },
    {
      'dano': randint(10, 100),
      'nome': 'Genki Dama',
      'foto': 'static\images\genkidama.jpg'
    }
  ]

  return render_template(
    'index.html',
    inimigos = inimigos,
    armas = armas
  )

if __name__=='__main__':
  app.run(debug=True)
