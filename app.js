import Alligator from './models/a.js'
import Baboon from './models/b.js'
import Camel from './models/c.js'
import Deer from './models/d.js'
import Eel from './models/e.js'
import Ferret from './models/f.js'


let Alfred = new Alligator('Alfred', 4, 'green')

//Alfred.eat('people')

let Billy = new Baboon('Billy', 'Silver', true, 'Monkeying Around!')

//Billy.talk()

let Carl = new Camel('Carl', 2, false)

//Carl.talk('ARRGHGHG')

let Dean = new Deer('Dean', 4, 'brown')

//Dean.talk('Camry')

let Eric = new Eel('Eric', false)

//Eric.talk()

let Fred = new Ferret('Fred', 4, 'Dancing', 'Electrify', 'Bex')

//Fred.talk()


let fluffy = []


fluffy.push(Billy, Carl, Fred, Dean)
console.log(fluffy);