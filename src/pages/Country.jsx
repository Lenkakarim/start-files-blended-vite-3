import { useLocation, useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import Heading from '../components/Heading/Heading';
import { fetchCountry } from '../service/countryApi';
import { useState, useEffect, useRef } from 'react';
import CountryInfo from '../components/CountryInfo/CountryInfo';
import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';

const Country = () => {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { countryId } = useParams();
  const location = useLocation();
  const goBack = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <GoBackBtn path={goBack.current} />
        {isLoading && <Loader />}
        {error && <Heading title="Oops! Something went wrong ..." bottom />}
        {country && <CountryInfo {...country} />}
      </Container>
    </Section>
  );
};

export default Country;
