import csv
import glob
import datetime
from crawling import (auth_crawling, page_crawling)

input_path = r'./data/book_*.csv'
output_path = r'./data/book_table.csv'

file_list=glob.glob(input_path)

with open(output_path,'a', newline="") as write_f:
    headers = ['isbn', 'title', 'description', 'author', 'publisher', 'img_url', 'page']
    
    writer = csv.DictWriter(write_f, fieldnames=headers)
    # writer.writeheader()

    # 1. 하나씩 실행
    with open(input_path, encoding='utf-8') as csv_file:
        file = csv.reader(csv_file)
        start_time = datetime.datetime.now()
        for i, f in enumerate(file):
            book = {
                'isbn': f[1],
                'title': f[3],
                'description': f[10],
                'img_url': f[9],
                'publisher': f[5]
            }
            try:
                print(f'{i}번째 크롤링 시작!')
                book['author'] = auth_crawling(book['isbn'])
                book['page'] = page_crawling(book['isbn'])
                # print(f'{i}번째 크롤링 성공!')
                writer.writerow(book)
                # print(f'{i}번째 쓰기 성공~~')
            except AttributeError:
                print(f'{i}번째 크롤링 실패')
        print(f'시작: {start_time} 끝: {datetime.datetime.now()}')

    
    # 2. 한번에 실행
    # for book_file in file_list:
    #     with open(book_file, encoding='utf-8') as csv_file:
    #         file = csv.reader(csv_file)
    #         start_time = datetime.datetime.now()
    #         for i, f in enumerate(file):
    #             book = {
    #                 'isbn': f[1],
    #                 'title': f[3],
    #                 'description': f[10],
    #                 'img_url': f[9],
    #                 'publisher': f[5]
    #             }
    #             try:
    #                 print(f'{i}번째 크롤링 시작!')
    #                 book['author'] = auth_crawling(book['isbn'])
    #                 book['page'] = page_crawling(book['isbn'])
    #                 # print(f'{i}번째 크롤링 성공!')
    #                 writer.writerow(book)
    #                 # print(f'{i}번째 쓰기 성공~~')
    #             except AttributeError:
    #                 print(f'{i}번째 크롤링 실패')
    #         print(f'시작: {start_time} 끝: {datetime.datetime.now()}')