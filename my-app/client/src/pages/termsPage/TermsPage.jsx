import PageHeader from '../pageHeader/PageHeader';
import termsData from './data';
import InfoPage from '../infoPage/InfoPage';

const TermsPage = () => {
  return (
    <section>
      <PageHeader
        label="Terms & Conditions"
        subtitle="Rules and guidelines for using our site and services."
      />
      {termsData.map((item, index) => (
        <InfoPage
          key={index}
          title={item.title}
          children={item.content}
          style={{ whiteSpace: 'pre-line' }}
        ></InfoPage>
      ))}
    </section>
  );
};
export default TermsPage;
