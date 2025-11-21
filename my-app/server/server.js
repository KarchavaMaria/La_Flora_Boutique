import app from './app.js';
import config from 'config';

const PORT = config.get('PORT');

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
