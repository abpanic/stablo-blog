import Link from "next/link";
import Container from "@/components/container";
import TSGList from "@/components/tsglist";

export default function TSG({ tsgs }) {
  return (
    <>
      {tsgs && (
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {tsgs.slice(0, 2).map(tsg => (
              <TSGList
                key={tsg._id}
                tsg={tsg}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {tsgs.slice(2, 14).map(tsg => (
              <TSGList key={tsg._id} tsg={tsg} aspect="square" />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>View all TSGs</span>
            </Link>
          </div>
        </Container>
      )}
    </>
  );
}
