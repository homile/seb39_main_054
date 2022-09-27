import React from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import CategoryDropdown from "../../../components/dropdowns/CategoryDropdown";
import Category from "../../../components/filters/category/Category";
import Search from "../../../components/filters/search/Search";
import ShareState from "../../../components/filters/shareState/ShareState";
import { PostBtn } from "../../../components/ui/buttons/buttons";

const ShareListFilter = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 786 });

  const postToggle = () => {
    navigate("/share/post");
  };

  const categoryChange = (el) => {
  };

  return (
    <Container>
      {!isMobile && <Category></Category>}
      <SearchAndPostContainer>
        <div className="test">
          <Search>search</Search>
          {isMobile && (
            <CategoryDropdown
              categoryChange={categoryChange}
            ></CategoryDropdown>
          )}
        </div>
        <PostBtn onClick={postToggle}>글작성</PostBtn>
      </SearchAndPostContainer>
      <ShareState>공유상태</ShareState>
    </Container>
  );
};

export default ShareListFilter;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SearchAndPostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    .test{
      display: flex;
    }
  }
`;
