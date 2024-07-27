import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

interface Apartment {
  id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
  description: string;
}

const ApartmentDetailsScreen: React.FC<{ route: any }> = ({ route }) => {
  const { id } = route.params;
  const [apartment, setApartment] = useState<Apartment | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const apiUrl = process.env.REACT_APP_API_URL; 
  useEffect(() => {
    const fetchApartment = async () => {
      try {
        const response = await axios.get(`${apiUrl}/apartments/${id}`);
        setApartment(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchApartment();
  }, [id]);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;

  if (!apartment) return <Text>Apartment not found</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: apartment.imageUrl || 'default-image.jpg' }} style={styles.image} />
      <Text style={styles.title}>{apartment.title}</Text>
      <Text>Location: {apartment.location}</Text>
      <Text>Price: ${apartment.price}</Text>
      <Text style={styles.description}>{apartment.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default ApartmentDetailsScreen;
