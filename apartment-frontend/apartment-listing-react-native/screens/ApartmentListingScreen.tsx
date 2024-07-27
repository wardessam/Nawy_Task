import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

interface Apartment {
  _id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
}

const ApartmentListingScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const apiUrl = process.env.REACT_APP_API_URL; 
  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const response = await axios.get(`${apiUrl}/apartments`);
        setApartments(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchApartments();
  }, []);

  if (loading) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={apartments}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ApartmentDetails', { id: item._id })}>
            <View style={styles.card}>
              <Image source={{ uri: item.imageUrl || 'default-image.jpg' }} style={styles.image} />
              <View style={styles.cardContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.location}</Text>
                <Text>${item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    elevation: 3,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ApartmentListingScreen;
