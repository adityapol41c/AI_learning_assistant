import React, {useState, useEffect} from 'react';
import flashcardService from '../../services/flashcardService';
import PageHeader from '../../components/common/PageHeader';
import Spinner from '../../components/common/Spinner';
import EmptyState from '../../components/common/EmptyState';
import FlashcardSetCard from '../../components/flashcards/FlashcardSetCard';
import toast from 'react-hot-toast';

const FlashcardsListPage = () => {
  const [flashcardSets, setFlashcardSets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlashcardSets = async () =>{
      try{
        const response = await flashcardService.getAllFlashcardSets();
        console.log('fetchFlashcardSets___', response.data);
        setFlashcardSets(response.data);
      }catch(error){
        toast.error('failed to fetch flashcard sets.');
        console.error(error);
      }finally{
        setLoading(false);
      }
    };
    fetchFlashcardSets();
  },[]);

  const renderContent= () => {
    if(loading){
      return <Spinner />;
    }

    if(flashcardSets.length === 0){
      return (
        <EmptyState 
          title='No flashcard sets found' description='you have not generated any flashcards yet. go to document to create one.' />
      );
    }

    return(
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {flashcardSets.map((set) => (
          <FlashcardSetCard key={set._id} flashcardSet={set} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <PageHeader title="All flashcard sets" />
      {renderContent()}
    </div>
  )
}

export default FlashcardsListPage