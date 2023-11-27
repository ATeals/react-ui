import { PATH } from "./routes";
import { generateClassName } from "./utils/generateClassName";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <header className={generateClassName("p-5 px-10", "flex justify-between items-center")}>
        <h1 className={generateClassName("font-bold text-2xl")}>React - UI - Archive</h1>
        <nav>
          <Link to={PATH.HOME}>Home</Link>
        </nav>
      </header>
      <main className={generateClassName("min-h-screen", "p-10")}>
        <Outlet />
        <p>
          달하는 것이라는 접근을 하여 사용한다면 다양한 상황에 유용하게 쓸 수 있답니다. 전역 상태
          관리 라이브러리는 언제 써야 할까? 리액트를 사용하여 웹 애플리케이션을 구현하면서, Redux,
          MobX, Recoil, Jotai, Zustand 등의 다양한 전역 상태 관리 라이브러리를 사용하곤 합니다.
          과거에는 리액트의 Context가 굉장히 불편해서 전역 상태 관리 라이브러리를 사용하는 것이
          당연시 여겨졌던 시절이 있었지만 이제는 사용하기 편해져서 단순히 전역적인 상태를 관리하기
          위함이라면 더 이상 사용해야 할 이유가 없습니다. 단, "상태 관리 라이브러리"와 Context는
          완전히 별개의 개념임을 잘 이해하셔야 합니다. Context는 전역 상태 관리를 할 수 있는 수단일
          뿐이고, 상태 관리 라이브러리는 상태 관리를 더욱 편하고, 효율적으로 할 수 있게 해주는
          기능들을 제공해주는 도구입니다. 예를 들어, Redux의 경우에는 액션과 리듀서라는 개념을
          사용하여 상태 업데이트 로직을 컴포넌트 밖으로 분리 할 수 있게 해주며, 상태가 업데이트 될
          때 실제로 의존하는 값이 바뀔 때만 컴포넌트가 리렌더링 되도록 최적화를 해줍니다. 만약
          Context를 쓴다면, 각기 다른 상태마다 새롭게 Context를 만들어주어야 하는데, 이 과정을
          생략할 수 있기에 편리하죠. MobX의 경우엔 Redux와 마찬가지로 상태 업데이트 로직을 컴포넌트
          밖으로 분리할 수 있게 해주고, 함수형 리액티브 프로그래밍 방식을 도입하여 mutable한 상태가
          리액트에서도 잘 보여지게 해주고 상태 업데이트 로직을 더욱 편하게 작성할 수 있게 해주며
          최적화도 잘 해줍니다. Recoil, Jotai, Zustand의 경우엔 Context를 일일이 만드는 과정을
          생략하고 Hook 기반으로 아주 편하게 전역 상태 관리를 할 수 있게 해주죠. 최적화 기능 또한
          덤으로 딸려오고요. 전역 상태 라이브러리는 결국 상태 관리를 조금 더 쉽게 하기 위해서
          사용하는 것이며 취향에 따라 선택해서 사용하면 되는 것입니다.
        </p>
      </main>
      <footer className={generateClassName("p-10", "flex justify-center items-center")}>
        &copy; Ateals
      </footer>
    </>
  );
};

export default App;
