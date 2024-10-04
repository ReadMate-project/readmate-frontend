import React from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import S from './style'


const BookClubPage = () => {
    return (
        <div>
        
        
        <S.Container>
            <S.HeroSection>
                <S.HeroImage src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg" alt="Book Club Hero" />
                    <S.HeroContent>
                        <h1>Welcome to ReadMate Book Club</h1>
                        <p>Join our community of book lovers! Discover new books, engage in thoughtful discussions, and connect with fellow readers from around the world.</p>
                        <a href="#!">Join Now!</a>
                </S.HeroContent>
            </S.HeroSection>
        </S.Container>

        
        <S.Container>

        <S.CardSection>
          {[
            { title: "Current Read", text: "Join us in reading 'The Great Gatsby' by F. Scott Fitzgerald. Our discussion starts next week!" },
            { title: "Upcoming Events", text: "Author Q&A session, Virtual book swap, and Reading challenge. Check our events page for more details." },
            { title: "Member Spotlight", text: "Congratulations to Sarah for completing her 50-book challenge! Read her journey on our blog." }
          ].map((card, index) => (
            <S.Card key={index}>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
              <a href="#!">Learn More</a>
            </S.Card>
          ))}
        </S.CardSection>
      </S.Container>
        <Outlet />

        </div>
    );
}

export default BookClubPage;


