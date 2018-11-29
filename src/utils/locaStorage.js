import uniqid from 'uniqid';

const createDefaultState = () => ({
  notes: [
    {
      id: uniqid(),
      title: 'title 1',
      description: 'note description 1'
    },
    {
      id: uniqid(),
      title: 'title 2',
      description: 'note description 2'
    }
  ]
});

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('notesState');
    if (!serializedState) {
      return createDefaultState();
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return createDefaultState();
  }
};

const saveState = state => {
  try {
    const { notes } = state;
    const notesState = { notes };
    const serializedState = JSON.stringify(notesState);
    localStorage.setItem('notesState', serializedState);
  } catch (error) {
    // do something with errors, e.g. show error-page to user
  }
};

export default {
  loadState,
  saveState
};
