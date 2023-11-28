import { Dropbox } from "@/components";
import { useState } from "react";

export const DropboxPage = () => {
  const [option, setOption] = useState(0);

  return (
    <section>
      <h1>{option}</h1>
      <Dropbox.Provider enableHover={true}>
        <Dropbox.Trigger>
          <div className="border-2 p-2 rounded-lg">프로필 확인하기</div>
        </Dropbox.Trigger>
        <Dropbox.Menu>
          <div className="border-2 rounded-lg bg-white mt-1">
            <Dropbox.Option isSelect={() => setOption(1)}>
              <Profile
                img="https://i.pinimg.com/236x/66/14/0f/66140fe854b349b6b0c05a81622cbe61.jpg"
                name="Cat"
                description="I'm Cat"
              />
            </Dropbox.Option>
            <Dropbox.Option isSelect={() => setOption(2)}>
              <Profile
                img="https://i.pinimg.com/236x/66/14/0f/66140fe854b349b6b0c05a81622cbe61.jpg"
                name="Cat"
                description="I'm Cat"
              />
            </Dropbox.Option>
            <Dropbox.Option isSelect={() => setOption(3)}>
              <Profile
                img="https://i.pinimg.com/236x/66/14/0f/66140fe854b349b6b0c05a81622cbe61.jpg"
                name="Cat"
                description="I'm Cat"
              />
            </Dropbox.Option>
          </div>
        </Dropbox.Menu>
      </Dropbox.Provider>
      <Dropbox.Provider>
        <Dropbox.Trigger>
          <div className="border-2 p-2 rounded-lg">번호 선택하기</div>
        </Dropbox.Trigger>
        <Dropbox.Menu>
          <div className="border-2 rounded-lg bg-white w-[100px]">
            <Dropbox.Option isSelect={() => setOption(1)}>
              <span>1</span>
            </Dropbox.Option>
            <Dropbox.Option isSelect={() => setOption(2)}>
              <span>2</span>
            </Dropbox.Option>
            <Dropbox.Option isSelect={() => setOption(3)}>
              <span>3</span>
            </Dropbox.Option>
          </div>
        </Dropbox.Menu>
      </Dropbox.Provider>
    </section>
  );
};

const Profile = ({
  img,
  name,
  description,
}: {
  img: string;
  name: string;
  description: string;
}) => {
  return (
    <div className="flex w-[480px] bg-[wheat] rounded-lg scale-95 hover:scale-100">
      <img src={img} alt="" width={100} height={100} className="mr-5 rounded-lg" />
      <div className="p-2 flex flex-col items-center justify-center">
        <h1 className="text-xl">{name}</h1>
        <p className="text-gray">{description}</p>
      </div>
    </div>
  );
};
