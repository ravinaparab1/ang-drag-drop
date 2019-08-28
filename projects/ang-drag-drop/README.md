# ang-drag-drop
ang-drag-drop is a lightweight plug-and-play library for uploading  pdf/image files through drag/drop or browse.


## Installation

```bash
npm install ang-drag-drop
```

## Usage

Import ```AngDragDropModule``` in your application module

```
import { AngDragDropModule } from 'ang-drag-drop';

@NgModule({
  imports: [
    AngDragDropModule
  ]
});
```

Add the ```ang-drag-drop``` child component to your component

```
<ang-drag-drop></ang-drag-drop>
```

And you are good to go!

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
MIT License.
